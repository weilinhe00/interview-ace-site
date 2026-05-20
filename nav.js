(function () {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.site-header .nav');
  if (!btn || !nav) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('nav-open', open);
  }

  btn.addEventListener('click', function () {
    const open = document.body.classList.contains('nav-open');
    setOpen(!open);
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
