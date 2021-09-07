let menuBtn = document.querySelector(".menu-btn");
let navBar = document.querySelector("nav ul");
let exitBtn = document.querySelector(".exit-btn");

menuBtn.addEventListener("click", () => {
  navBar.style.transform = "translateX(0%)";
});

exitBtn.addEventListener("click", () => {
  navBar.style.transform = "translateX(100%)";
});
