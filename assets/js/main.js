(function () {
  document.documentElement.classList.add('js');

  var nav = document.querySelector('[data-site-nav]');
  var button = document.querySelector('[data-menu-toggle]');

  if (button && nav) {
    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  var here = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('[data-nav-link]').forEach(function (link) {
    var target = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (target === here || (target !== '/' && here.indexOf(target) === 0)) {
      link.setAttribute('aria-current', 'page');
    }
  });

  var io = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 })
    : null;

  document.querySelectorAll('.reveal').forEach(function (el) {
    if (!io) {
      el.classList.add('is-visible');
      return;
    }
    io.observe(el);
  });
})();
