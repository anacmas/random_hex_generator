const button = document.querySelector(".button-generate");
const hex = document.querySelector(".hex");

button.addEventListener("click", generateHex);

function generateHex() {
  let color = Math.random();
  let colorMultiplied = Math.trunc(color * 10000000).toString(16);
  hex.innerHTML = "#" + colorMultiplied;
  document.body.style.backgroundColor = "#" + colorMultiplied;
}
