let menuBtn = document.querySelector(".menu-btn");
let backBtn = document.querySelector(".back-btn");
let nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
});

backBtn.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
});
