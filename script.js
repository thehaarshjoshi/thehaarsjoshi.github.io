const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  nav.style.display = open ? 'flex' : '';
  if (open) {
    nav.style.position = 'absolute';
    nav.style.top = '82px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '24px 6vw';
    nav.style.flexDirection = 'column';
    nav.style.background = 'rgba(8,9,9,.97)';
    nav.style.borderBottom = '1px solid rgba(255,255,255,.09)';
  }
});
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  if (window.innerWidth <= 850) nav.style.display = 'none';
}));
