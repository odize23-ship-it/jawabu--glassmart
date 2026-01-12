// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});

// Simple form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you for contacting Jawabu Glassmart! We'll get back to you soon.");
  form.reset();
});
