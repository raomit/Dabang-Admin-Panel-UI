const toggler = document.querySelector('a.toggler');
const sidebar = document.querySelector('div.sidebar-nav');


toggler.addEventListener('click', () => {
    sidebar.classList.toggle('clicked');
})



// Tooltip Initialiser
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})