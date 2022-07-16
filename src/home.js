// ==================== Blink Animation ====================
const blink = document.getElementById("blink");

setInterval(() => {
  setTimeout(() => {
    blink.classList.toggle("hidden");
  }, 100);
  blink.classList.toggle("hidden");
}, 2000);

// ==================== Mark Animation ====================
const svgMarks = document.querySelectorAll(".mark path");
const email = document.querySelector(".mark-email");
const markEmail = document.querySelector("#mark-email path");

svgMarks.forEach((svg) => {
  svg.style.strokeDasharray = svg.getTotalLength();
  svg.style.strokeDashoffset = svg.getTotalLength();
  svg.style.transition = "0.5s ease-in-out 0.2s";
});

function markReveal() {
  svgMarks.forEach((svg, index) => {
    if (svg.getBoundingClientRect().top <= window.innerHeight) {
      svg.style.strokeDashoffset = 0;
    }
  });
}

email.addEventListener("mouseenter", () => {
  markEmail.style.transition = "initial";
  markEmail.style.transitionDelay = "0.5s";
  markEmail.style.animation = "markAnimation 1s ease-in-out";
  markEmail.style.stroke = "#fff";
});

email.addEventListener("mouseleave", () => {
  markEmail.style.transition = "0.3s";
  markEmail.style.animation = "initial";
  markEmail.style.stroke = "#000";
});

// ==================== Parallax Effect ====================
// ============== Hero-MainShape ==============
const mainShape = document.querySelector(".hero__main-shape");
const viewportHeight = screen.height;
const initialPosition = viewportHeight * 0.5;
mainShape.style.top = initialPosition + "px";

const video = document.querySelector(".hero__video-wrapper");
const topVideo = video.getBoundingClientRect().top;
const heightVideo = video.getBoundingClientRect().height;
let rotation = 0;
let oldScrollY = 0;

function heroParallax() {
  if (window.scrollY <= viewportHeight) {
    mainShape.style.top = initialPosition + window.scrollY * 0.1 + "px";
  }

  if (
    window.scrollY + viewportHeight >= topVideo &&
    window.scrollY + viewportHeight <= topVideo + heightVideo + viewportHeight
  ) {
    if (window.scrollY >= oldScrollY) rotation += 0.15;
    else rotation -= 0.15;

    video.style.transform = `rotateZ(${rotation}deg)`;
    oldScrollY = window.scrollY;
  }
}

// ========================================================
// ==================== Window Event Listener ====================
// ========================================================

window.addEventListener("scroll", () => {
  markReveal();
  heroParallax();
});

// ========================================================
// ==================== Scroll Reveal ====================
// ========================================================
ScrollReveal().reveal(".work .heading-primary", {
  delay: 300,
  duration: 500,
  distance: "100px",
  opacity: 0,
  easing: "ease-in-out",
  scale: 0.85,
  reset: false,
});

AOS.init();
