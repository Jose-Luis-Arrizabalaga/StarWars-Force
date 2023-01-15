let s1 = document.getElementById('s1');
let switchState = true;

function onOff() {
  if (switchState) {
    s1.style.transform = "translateX(80px)";
    switchState = false;
  } else {
    s1.style.transform = "translateX(0px)";
    switchState = true;
  }
}
s1.addEventListener('click', toggleSwitch);

