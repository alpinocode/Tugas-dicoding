document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".navbar-nav").classList.toggle("active");
  });

const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const button = document.getElementById("button");

document.addEventListener("click", function (e) {
  if (button.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
