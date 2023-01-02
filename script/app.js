let card = document.querySelector(".projects");

let moreProject = [
  {
    siteAddress: `https://team-ekyam-project.netlify.app/`,
    previewImage1: `./images/website-7/website-7(a).jpg`,
    previewImage2: `./images/website-7/website-7(b).jpg`,
    projectName: `TEam ekyam project`,
  },
  {
    siteAddress: `https://alarmwatch.netlify.app/`,
    previewImage1: `./images/website-8/website-8(a).jpg`,
    previewImage2: `./images/website-8/website-8(b).jpg`,
    projectName: `alarm watch`,
  },
  {
    siteAddress: `https://tictactoeproj.netlify.app/`,
    previewImage1: `./images/website-4/website-4(a).jpg`,
    previewImage2: `./images/website-4/website-4(b).jpg`,
    projectName: `Tictac toe`,
    // previewImage3: `./images/website-4/website-4(c).jpg`,
  },
];
// console.log(...moreProject);

let project = [
  {
    siteAddress: `https://stopwatch-proj.netlify.app/`,
    previewImage1: `./images/website-1/website-1(a).jpg`,
    projectName: `Stopwatch`,
  },
  {
    siteAddress: `https://analog-clock-proj.netlify.app/`,
    previewImage1: `./images/website-2/website-2(a).jpg`,
    projectName: `Analog Watch`,
  },
  {
    siteAddress: `https://spacexcopy.netlify.app/`,
    previewImage1: `./images/website-3/website-3(a).jpg`,
    previewImage2: `./images/website-3/website-3(b).jpg`,
    previewImage3: `./images/website-3/website-3(c).jpg`,
    projectName: `SpaceX Clone`,
  },

  {
    siteAddress: `https://weather-app-js-web.netlify.app/`,
    previewImage1: `./images/website-5/website-5(a).jpg`,
    projectName: `Weather app`,
  },
  {
    siteAddress: `https://calculator-js-project-web.netlify.app/`,
    previewImage1: `./images/website-6/website-6(a).jpg`,
    projectName: `Calculator`,
  },
  {
    siteAddress: `https://to-do-js-proj.netlify.app/`,
    previewImage1: `./images/website-9/website-9(a).jpg`,
    projectName: `Todo List`,
  },
  // ...moreProject,
];
// console.log(project);

// console.log(project[1].previewImage);
function projectShow() {
  project.forEach(function (e) {
    // console.log(e.hasOwnProperty(`previewImage2`));
    // console.log(i);

    card.innerHTML += `
   <div class="project section">
            <div class="image-overlay">
              <img src="${
                e.previewImage1
              }" alt="Website name" class="project-image" />
              <div class="project-information">
                <p>
              ${e.projectName}</p>
              </div>
            </div>
            <hr class="line" />
            <div class="preview-site">
              <button class="preview">Preview</button>

              <a href="${
                e.siteAddress
              }" target="_blank"><button class="site">Visit Site</button></a>
            </div>
            <div class="preview-open hidden ">
              <p class="cross-preview">
                <i class="material-icons" id="cross">close</i>
              </p>
              <div class="website-img">
                <img src="${
                  e.previewImage1
                }" class="preview-image" alt="Website Preview" />
              </div>
              <hr class="line" />

              <div class="website-gallery">
                <div class="gallery-images">
                  <img src="${
                    e.previewImage1
                  }" alt="" class="gallery gallery-border ">
                  ${
                    e.hasOwnProperty(`previewImage2`) === true
                      ? `<img src="${e.previewImage2}" alt="" class="gallery">`
                      : ` `
                  }
                  ${
                    e.hasOwnProperty(`previewImage3`) === true
                      ? `<img src="${e.previewImage3}" alt="" class="gallery ">`
                      : ` `
                  }

                </div>

              </div>
            </div>
          </div>

  `;
  });
}
projectShow();
const allSection = document.querySelectorAll(".section");
const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const navLinks = document.querySelector(".nav-links");
const light = document.querySelector(".light");
const mode = document.querySelector(".btn-mode");
const body = document.querySelector("body");
const dark = document.querySelector(".dark");
const btnHire = document.querySelector(".hirebtn");
const section4 = document.querySelector("#section-4");
const navLink = document.querySelectorAll(".nav-link");
let previews = Array.from(document.querySelectorAll(".preview"));
// console.log(previews);
let previewOpen = Array.from(document.querySelectorAll(".preview-open"));
let crossPreview = Array.from(document.querySelectorAll(".cross-preview"));

let bigImage = Array.from(document.querySelectorAll(".preview-image"));
let galleryImage = Array.from(document.querySelectorAll(".gallery"));

const progressLine = Array.from(document.querySelectorAll(".progress-line"));
const progressLineSpan = Array.from(
  document.querySelectorAll(".progress-line span")
);
const fullBody = document.querySelector("body");

const showMore = document.querySelector(".more");
// console.log(showMore);
const showLess = document.querySelector(".less");
// console.log(showLess);
showMore.addEventListener("click", function () {
  card.innerHTML = "";
  showMore.classList.add("hidden");
  showLess.classList.remove("hidden");
  // console.log(previews);
  // console.log(project);
  project = project.concat(moreProject);

  // let previewsShow = Array.from(document.querySelectorAll(".preview"));
  // // console.log(previews);
  // console.log();
  // console.log(previewsShow);
  // previewOpen = Array.from(document.querySelectorAll(".preview-open"));
  // crossPreview = Array.from(document.querySelectorAll(".cross-preview"));

  // bigImage = Array.from(document.querySelectorAll(".preview-image"));
  // galleryImage = Array.from(document.querySelectorAll(".gallery"));
  // console.log(project);
  // console.log(card);
  // console.log(previews);
  // console.log(crossPreview);
  projectShow();
  previewEqual();

  previewOpenMode();

  previewCloseModal();
  // showLess.style.transition = "1s ease-in-out";
  // console.log(card);
  // console.log(projectShow);
  // project.push(...moreProject);
});
function previewEqual() {
  previews = Array.from(document.querySelectorAll(".preview"));
  previewOpen = Array.from(document.querySelectorAll(".preview-open"));
  crossPreview = Array.from(document.querySelectorAll(".cross-preview"));
  // console.log(crossPreview);

  bigImage = Array.from(document.querySelectorAll(".preview-image"));
  galleryImage = Array.from(document.querySelectorAll(".gallery"));
}
// console.log(previews);

showLess.addEventListener("click", function () {
  card.innerHTML = "";
  card.innerHTML = "";
  showMore.classList.remove("hidden");
  showLess.classList.add("hidden");
  project = project.slice(0, 6);
  projectShow();
  previewEqual();
  previewOpenMode();
  previewCloseModal();
});
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
  body.classList.add("dark-mode");
  transitionMode();
  light.classList.toggle("hidden");
  dark.classList.toggle("hidden");
});
// for dark mode
dark.addEventListener("click", function () {
  dark.classList.add("hidden");
  transitionMode();
  light.classList.remove("hidden");
  body.classList.remove("dark-mode");
});
btnHire.addEventListener("click", function (e) {
  // console.log(e);
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
function previewOpenMode() {
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
            // console.log(galleryImage[index]);
            if (bigImage[index].src !== e.src) {
              e.classList.remove("gallery-border");
              e.classList.add("gallery-opacity");
            }
          });
        });
      });
    });
  });
}
previewOpenMode();
// console.log(project.concat(moreProject));
// console.log(moreProject);
// console.log(project);
// for preview close
function previewCloseModal() {
  crossPreview.forEach(function (e, i) {
    e.addEventListener("click", function () {
      previewOpen[i].classList.add(`hidden`);
      fullBody.classList.remove("body-background-preview");
    });
    // have some bug issue
    // document.addEventListener(`keydown`, function (event) {
    //   if (
    //     (event.key = `Escape` && !previewOpen[i].classList.contains("hidden"))
    //   ) {
    //     console.log(previewOpen[i]);
    //     console.log(i);
    //     previewOpen[i].classList.add("hidden");

    //     fullBody.classList.remove("body-background-preview");
    //   }
    // });
  });
}
previewCloseModal();
// Reveal things on scroll
const observer = new IntersectionObserver(
  (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        entry.target.classList.remove("section-hidden");
      }
      if (
        entry.target.classList.contains("skills") &&
        entry.isIntersecting === true
      ) {
        // console.log(`hello`);

        // console.log(progressLine);
        progressLine.forEach(function (entries) {
          // console.log(entries);
          entries.style.animation =
            "animate 1s cubic-bezier(1, 0, 0.5, 1) forwards";
        });
        progressLineSpan.forEach(function (entries) {
          // console.log(entries);
          entries.style.animation =
            "animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards";
        });
      }
    });
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
