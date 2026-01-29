// Load saved theme (if any)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);  // NEW: Save to memory
});