const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const navLinks = document.querySelector(".nav-links");
const light = document.querySelector(".light");
const mode = document.querySelector(".btn-mode");
const body = document.querySelector("body");
const dark = document.querySelector(".dark");
const btnHire = document.querySelector(".hirebtn");
const section4 = document.querySelector(".section-4");
const navLink = document.querySelectorAll(".nav-link");
const previews = document.querySelectorAll(".preview");
const previewOpen = document.querySelectorAll(".preview-open");
const crossPreview = document.querySelectorAll(".cross-preview");
const fullBody = document.querySelector("body");
let bigImage = document.querySelectorAll(".preview-image");
let galleryImage = document.querySelectorAll(".gallery");

function navHideAndShow() {
  navLinks.classList.toggle("show-links");
  cross.classList.toggle("hidden");
  bars.classList.toggle("hidden");
}
bars.addEventListener("click", function () {
  navHideAndShow();
});
cross.addEventListener("click", function () {
  navHideAndShow();
});

// for transition in dark and white mode
function transitionMode() {
  body.style.transition = `0.6s`;
}
// for light mode
light.addEventListener("click", function () {
  body.classList.remove("dark-mode");
  transitionMode();
  light.classList.add("hidden");
  dark.classList.remove("hidden");
});
// for dark mode
dark.addEventListener("click", function () {
  dark.classList.add("hidden");
  transitionMode();
  light.classList.remove("hidden");
  body.classList.add("dark-mode");
});
btnHire.addEventListener("click", function (e) {
  console.log(e);
  section4.scrollIntoView({ behavior: `smooth` });
});
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
  if (e.target.classList.contains("resume-btn")) {
    window.open("portfolio.pdf");
  }
});

previews.forEach(function (e, i) {
  e.addEventListener("click", function () {
    let index = i;
    // big image change open
    previewOpen[index].classList.remove("hidden");
    fullBody.classList.add("body-background-preview");
    galleryImage.forEach(function (e) {
      e.addEventListener(`click`, function () {
        e.classList.add("gallery-border");
        console.log(e);
        e.classList.remove("gallery-opacity");
        console.log(bigImage[index]);
        if (e.classList.contains("gallery-border")) {
          bigImage[index].src = e.src;
        }
        galleryImage.forEach(function (e) {
          if (bigImage[index].src !== e.src) {
            e.classList.remove("gallery-border");
            e.classList.add("gallery-opacity");
          }
        });
      });
    });
  });
});

// for preview close
crossPreview.forEach(function (e, i) {
  e.addEventListener("click", function () {
    previewOpen[i].classList.add(`hidden`);
    fullBody.classList.remove("body-background-preview");
  });
  document.addEventListener(`keydown`, function (e) {
    if ((e.key = `Escape` && !previewOpen[i].classList.contains("hidden"))) {
      previewOpen[i].classList.add("hidden");
      fullBody.classList.remove("body-background-preview");
    }
  });
});

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !previewOpen.classList.contains("hidden")) {
//   }
// });
