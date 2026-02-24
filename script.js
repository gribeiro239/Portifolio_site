(function () {
  'use strict';

  // Ano no footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // Stacks expansíveis nos projetos
  document.querySelectorAll('.project-stacks-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var panel = this.nextElementSibling;
      this.setAttribute('aria-expanded', !expanded);
      if (panel) {
        panel.hidden = expanded;
      }
    });
  });

  // Animações ao scroll
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(function (section) {
    sectionObserver.observe(section);
  });

  document.querySelectorAll('[data-animate]').forEach(function (el) {
    sectionObserver.observe(el);
  });
})();
