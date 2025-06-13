// Tēmas pārslēgšana
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Gada automātiskā ievietošana
document.getElementById('year').textContent = new Date().getFullYear();

// Vienkāršs skatījumu skaitītājs (lokāli, piemēram, testēšanai)
let counter = localStorage.getItem('views') || 0;
counter++;
localStorage.setItem('views', counter);
document.getElementById('hit-counter').textContent = counter;

const btn = document.getElementById('show-gallery-btn');
const gallery = document.getElementById('gallery');

btn.addEventListener('click', () => {
  if (gallery.style.display === 'none') {
    gallery.style.display = 'block';
    btn.textContent = 'Paslēpt projektu';
  } else {
    gallery.style.display = 'none';
    btn.textContent = 'Parādīt projektu';
  }
});
