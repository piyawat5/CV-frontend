//header
let topHeader = document.querySelector("header");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    //window.scrolly = 500
    //lastScrollY = 0
    topHeader.classList.add("hide");
  } else if (lastScrollY - window.scrollY > 18) {
    //lastScrollY = 500
    //window.scrollY = 480 cause slide up
    topHeader.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});
let topContainer = document.querySelector(".top-container");
let headOne = document.querySelector("h1");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let icon = document.querySelector("a i");
function pdfDownload() {
  if (headOne.innerHTML === "You can download PDF RESUME :") {
    headOne.innerHTML = "JAME PIYAWAT";
  } else {
    headOne.innerHTML = "You can download PDF RESUME :";
  }
}
function pdfDownload2() {
  if (headOne.innerHTML !== "JAME PIYAWAT") {
    headOne.innerHTML = "JAME PIYAWAT";
  }
}
function iconHide() {
  if (icon.style.display === "none") {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
}
function iconHide2() {
  if (icon.style.display === "block") {
    icon.style.display = "none";
  }
}
topContainer.addEventListener("click", () => {
  pdfDownload();
  headOne.classList.toggle("big-head");
  iconHide();
});
main.addEventListener("click", () => {
  pdfDownload2();

  headOne.classList.remove("big-head");
  iconHide2();
});
footer.addEventListener("click", () => {
  pdfDownload2();

  headOne.classList.remove("big-head");
  iconHide2();
});
//skill
const items = document.querySelectorAll(".item");
const headItems = document.querySelectorAll(".item h4");
items.forEach((item) => {
  item.addEventListener("click", () => {
    removeAll();
    item.classList.add("active");
  });
});
function removeAll() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}
