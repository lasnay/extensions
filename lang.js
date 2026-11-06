const stored = (() => { try { return localStorage.getItem('lang'); } catch { return null; } })();
const browser = (navigator.language || 'en').slice(0, 2).toLowerCase() === 'fr' ? 'fr' : 'en';
const lang = stored || browser;

function apply(value) {
  document.documentElement.dataset.lang = value;
  document.documentElement.lang = value;
  const button = document.getElementById('lang-button');
  if (button) button.textContent = value === 'fr' ? 'English' : 'Français';
}

apply(lang);
document.getElementById('lang-button')?.addEventListener('click', () => {
  const next = document.documentElement.dataset.lang === 'fr' ? 'en' : 'fr';
  try { localStorage.setItem('lang', next); } catch { /* stockage indisponible */ }
  apply(next);
});
