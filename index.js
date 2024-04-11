window.addEventListener("scroll", function() {
    var menu = document.getElementById("header");
    if (window.scrollY > 0) {
      menu.classList.add("shadow");
    } else {
      menu.classList.remove("shadow");
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('floating-menu');
  overlay.classList.toggle('show');
});
