window.addEventListener("scroll", function() {
    var menu = document.getElementById("header");
    if (window.scrollY > 0) {
      menu.classList.add("shadow");
    } else {
      menu.classList.remove("shadow");
    }
});