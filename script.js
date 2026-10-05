const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("mobile-open");
});
