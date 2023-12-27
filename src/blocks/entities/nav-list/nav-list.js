document.querySelectorAll('[data-toggle-nav-list]').forEach(elem =>
  elem.addEventListener('click',  (e) =>
    e.target.parentNode.classList.toggle('active'))
);
