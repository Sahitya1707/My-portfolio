const allSection = document.querySelectorAll("#section");
const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const navLinks = document.querySelector(".nav-links");
const light = document.querySelector(".light");
const mode = document.querySelector(".btn-mode");
const body = document.querySelector("body");
const dark = document.querySelector(".dark");
const btnHire = document.querySelector(".hirebtn");

const navLink = document.querySelectorAll(".nav-link");
const previews = document.querySelectorAll(".preview");
const previewOpen = document.querySelectorAll(".preview-open");
const crossPreview = document.querySelectorAll(".cross-preview");
const fullBody = document.querySelector("body");
let bigImage = document.querySelectorAll(".preview-image");
let galleryImage = document.querySelectorAll(".gallery");
// const skills = document.querySelector(`.skills`);
const progressLine = document.querySelectorAll(".progress-line");
const progressLineSpan = document.querySelectorAll(".progress-line span");
console.log(progressLineSpan);

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
        // console.log(e);
        e.classList.remove("gallery-opacity");
        // console.log(bigImage[index]);
        if (e.classList.contains("gallery-border")) {
          bigImage[index].src = e.src;
        }
        galleryImage.forEach(function (e) {
          console.log(galleryImage[index]);
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
    //   for (let j = 0; j <= 15; j + 3) {
    //     gallery[j].classList.add("gallery-border");
    //   }
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

// Reveal things on scroll
const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries[2]);
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        entry.target.classList.remove("section-hidden");
      }
      if (
        entry.target.classList.contains("skills") &&
        entry.isIntersecting === true
      ) {
        console.log(`hello`);

        console.log(progressLine);
        progressLine.forEach(function (entries) {
          console.log(entries);
          entries.style.animation =
            "animate 1s cubic-bezier(1, 0, 0.5, 1) forwards";
        });
        progressLineSpan.forEach(function (entries) {
          console.log(entries);
          entries.style.animation =
            "animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards";
        });
        // progressLine.style.
      }
    });
    // console.log(entries[2]);
    // if (entries[2].isIntersecting === true) {
    //   console.log("hello");
    // } else {
    //   return;
    // }
  },
  {
    threshold: 0.1,
  }
);
// console.log(allSection);
allSection.forEach(function (section) {
  observer.observe(section);
});
observer.observe(allSection[2]);

// const newAnimation = new IntersectionObserver((entriesAnimation) => {
//   console.log(entriesAnimation);
//   if (entriesAnimation.isVisible === true) {
//     console.log(`hello`);
//   } else {
//     return;
//   }
// });
// newAnimation.observe(allSection[2]);
