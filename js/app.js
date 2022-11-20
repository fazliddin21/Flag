let body = document.querySelector("body");
let modeBtn = document.querySelector(".mode-btn");

modeBtn.addEventListener("click", () => {
  body.classList.toggle("mode");
})