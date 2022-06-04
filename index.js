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
function pdfDownload() {
  if (
    headOne.innerHTML ===
    "You can download PDF RESUME at the bottom of this website (click contact)."
  ) {
    headOne.innerHTML = "RESUME";
  } else {
    headOne.innerHTML =
      "You can download PDF RESUME at the bottom of this website (click contact).";
  }
}
function pdfDownload2() {
  if (headOne.innerHTML !== "RESUME") {
    headOne.innerHTML = "RESUME";
  }
}
headOne.addEventListener("click", () => {
  pdfDownload();
  headOne.classList.toggle("big-head");
});
main.addEventListener("click", () => {
  pdfDownload2();
  headOne.classList.remove("big-head");
});
footer.addEventListener("click", () => {
  pdfDownload2();
  headOne.classList.remove("big-head");
});
