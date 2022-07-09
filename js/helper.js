// ==================== Preload Screen ====================
const loader = document.querySelector(".loader");
const circle = document.querySelector(".circle");

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    circle.style.transition = "all 1s";
    circle.style.r = "100%";
    document.body.classList.remove("loading");
  }, 4000);

  setTimeout(() => {
    loader.style.display = "none";
  }, 5000);
});

// ==================== Header animation ====================
const header = document.querySelector(".header");

var oldScroll = 0;
var fromBottom = false;
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 300 && oldScroll < window.scrollY && !fromBottom) {
    header.style.animation = "headerAnimationHide 0.5s ease both";
  }

  if (window.scrollY < 300 && oldScroll > window.scrollY) {
    header.style.animation = "headerAnimationShow 0.5s ease both";
  }

  let documentHeight = document.body.scrollHeight;
  let currentScroll = window.scrollY + window.innerHeight;
  // window.innerHeight viewportHeight
  // When the user is [modifier]px from the bottom, fire the event.
  let modifier = 10;
  if (currentScroll + modifier > documentHeight) {
    header.style.animation = "headerAnimationShow 0.5s ease both";
    fromBottom = true;
  }

  if (
    window.scrollY + window.innerHeight < documentHeight - 800 &&
    fromBottom
  ) {
    header.style.animation = "headerAnimationHide 0.5s ease both";
    fromBottom = false;
  }

  oldScroll = window.scrollY;
});

// ==================== Hover pointer ====================
const mainWork = document.querySelector(".work__main");
const projectsContainer = document.querySelector(".work__wrapper");
const projects = Array.from(projectsContainer.children);
projects.push(mainWork);

let cursor = document.querySelector(".cursor");

window.onmousemove = (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
};

projects.forEach((links) => {
  links.onmouseenter = () => {
    cursor.classList.add("active");
    cursor.classList.remove("hide");
  };

  links.onmouseleave = () => {
    cursor.classList.add("hide");
    cursor.classList.remove("active");
  };
});
