// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Lightbox for gallery images (activities, rooms, etc.)
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

document.querySelectorAll('.room-card img, .detail-gallery img, .activity-card img').forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    img.src = image.src;
    img.alt = image.alt;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Optional: simple search bar interaction
const searchBar = document.querySelector('.search-bar');
if (searchBar) {
  searchBar.querySelector('button').addEventListener('click', () => {
    const where = searchBar.querySelector('input[placeholder="Where"]').value;
    const when = searchBar.querySelector('input[placeholder="When"]').value;
    const who = searchBar.querySelector('input[placeholder="Who"]').value;
    alert(`Search requested:\nWhere: ${where}\nWhen: ${when}\nWho: ${who}`);
    // Later, you can connect this to a backend or filter rooms dynamically
  });
}

// Host form confirmation popup
const hostForm = document.querySelector('.host-form form');
if (hostForm) {
  hostForm.addEventListener('submit', function(e) {
    e.preventDefault(); // stop default mailto for now
    alert("✅ Thank you for submitting your property!\nWe’ll review your request and contact you soon.");
    hostForm.reset();
    // If you want to still send via mailto, remove e.preventDefault()
    // and keep the alert as a friendly confirmation.
  });
}
