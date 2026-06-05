// Smooth scroll to room details
function showRoom(id) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({ 
      top: section.offsetTop - 60, 
      behavior: 'smooth' 
    });
  }
}

// Lightbox for gallery images
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.cssText = `
  display:none; position:fixed; inset:0; background:rgba(0,0,0,0.8);
  justify-content:center; align-items:center; z-index:9999;
`;
document.body.appendChild(lightbox);

const img = document.createElement('img');
img.style.maxWidth = '90%';
img.style.maxHeight = '80%';
img.style.borderRadius = '8px';
lightbox.appendChild(img);

document.querySelectorAll('.room-detail img, .room-card img').forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    img.src = image.src;
    img.alt = image.alt;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
