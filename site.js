// Set false for a portfolio-only edition before deploying to GitHub Pages.
const SHOW_COMMERCIAL_OFFERS = true;
if (!SHOW_COMMERCIAL_OFFERS) document.querySelectorAll('.commercial').forEach(el => el.remove());
document.querySelector('#year').textContent = new Date().getFullYear();
const dialog = document.querySelector('#lightbox');
document.querySelectorAll('.photo').forEach(button => button.addEventListener('click', () => {
  const image = document.querySelector('#lightbox-image');
  image.src = button.dataset.image;
  image.alt = button.querySelector('img').alt;
  document.querySelector('#lightbox-caption').textContent = button.dataset.caption;
  dialog.showModal();
}));
document.querySelector('#close-lightbox').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); }});
document.querySelectorAll('.inquiry').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#inquiry-summary').hidden = false;
  document.querySelector('#inquiry-text').textContent = `Hi Omaar, I’m interested in ${link.dataset.package}. Our date is [date], and our location is [location]. Are you available?`;
  document.querySelector('#copy-status').textContent = '';
}));
document.querySelector('#copy-inquiry').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(document.querySelector('#inquiry-text').textContent); document.querySelector('#copy-status').textContent = 'Copied. Paste into your Instagram message.'; }
  catch { document.querySelector('#copy-status').textContent = 'Select and copy the inquiry text above.'; }
});
