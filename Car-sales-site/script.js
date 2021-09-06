const menuBtn = document.querySelector(".menu");
const panel = document.querySelector(".filter");
// get access to css property in js
const panelStyle = window.getComputedStyle(panel);

menuBtn.addEventListener("click", () => {
  // getpropertyvalue to get value of property
  if (panelStyle.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
    //   clip-path - clipPath in js
    panel.style.clipPath = "circle(100% at 50% 50%)";
  } else {
    panel.style.clipPath = "circle(0% at 100% 0%)";
  }
});

// click anywhere but other than filter to unset filter clippath animation
document.addEventListener("mouseup", event => {
  if (panelStyle.getPropertyValue("clip-path") === "circle(100% at 50% 50%)") {
    if (!panel.contains(event.target)) {
      panel.style.clipPath = "circle(0% at 100% 0%";
    }
  }
});

function changeHeart(x) {
  x.classList.toggle("fas");
  x.classList.toggle("far");
}
