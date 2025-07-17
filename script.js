
// Typed.js initialization
const typed = new Typed('#typed-text', {
  strings: ['Hi, I\'m Hiba 👩‍💻', 'Full Stack Developer', 'Android Enthusiast'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Dark mode toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
