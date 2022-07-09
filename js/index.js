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

window.addEventListener("scroll", () => {
  svgMarks.forEach((svg, index) => {
    if (svg.getBoundingClientRect().top <= window.innerHeight) {
      svg.style.strokeDashoffset = 0;
    }
  });
});

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
