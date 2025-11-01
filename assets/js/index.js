let boing = new Audio("https://www.myinstants.com/media/sounds/boing_lmke36X.mp3");
let boingButton = document.querySelector("#boing");
if (boingButton) {
  document.querySelector("button").addEventListener("click", () => {
    boing.play();
  });
}

document.querySelector("#scroll-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0, 
    behavior: "smooth", 
  })
})

document.addEventListener("DOMContentLoaded", () => {
  alert("Bine ai venit pe: " + document.title);
})

document.querySelector("img").addEventListener("click", function(e) {
  console.log("X: " + (e.clientX - this.getBoundingClientRect().left));
  console.log("Y: " + (e.clientY - this.getBoundingClientRect().top));
})