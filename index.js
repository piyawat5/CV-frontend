//header
let topHeader = document.querySelector("header");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    topHeader.classList.add("hide");
  } else {
    topHeader.classList.remove("hide");
  }

  lastScrollY = window.scrollY;
});

let headOne = document.querySelector("h1");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
headOne.addEventListener("click", () => {
  headOne.classList.toggle("big-head");
});
main.addEventListener("click", () => {
  headOne.classList.remove("big-head");
});
footer.addEventListener("click", () => {
  headOne.classList.remove("big-head");
});
