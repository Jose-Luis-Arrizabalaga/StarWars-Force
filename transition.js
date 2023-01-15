const button = document.getElementById("s1");
const element = document.getElementById("forceI");
let active = false;

button.addEventListener("click", function() {
  if (active) {
    element.style.animation = "none";
    active = false;
  } else {
    element.style.animation = "vibrate 0.5s infinite";
    active = true;
  }
});
