// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});
// Lightbox functionality
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Drag-and-drop flyer upload
const uploadArea = document.getElementById('upload-area');
const flyerUpload = document.getElementById('flyer-upload');
const flyerPreview = document.getElementById('flyer-preview');

if (uploadArea && flyerUpload && flyerPreview) {
  uploadArea.addEventListener('click', () => flyerUpload.click());

  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.background = '#e6f0ff';
  });
  uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.background = '';
  });
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.background = '';
    const file = e.dataTransfer.files[0];
    handleFlyerFile(file);
  });
  flyerUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFlyerFile(file);
  });

  function handleFlyerFile(file) {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        flyerPreview.src = e.target.result;
        flyerPreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  }
}