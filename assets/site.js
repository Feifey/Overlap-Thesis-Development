// Mobile menu + Labs dropdown (click/keyboard support)
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.textContent = open ? 'Close' : 'Menu';
  });
}
document.querySelectorAll('.has-menu').forEach((item) => {
  const btn = item.querySelector('.menu-btn');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.has-menu.open').forEach((i) => {
    i.classList.remove('open');
    i.querySelector('.menu-btn').setAttribute('aria-expanded', 'false');
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.dispatchEvent(new Event('click'));
});
