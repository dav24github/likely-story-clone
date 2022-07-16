// ==================== Projects animation ====================
const projectsWrapper = document.querySelector(".projects__wrapper");
const projects = Array.from(projectsWrapper.children);

class MoveInfite {
  constructor(project, direction) {
    this.offset = 0;
    this.project = project;
    this.projectWidth = this.project.getBoundingClientRect().width;
    this.speed = this.projectWidth * 0.0005;
    this.direction = direction;
    this.stop = false;

    this.start();
  }

  start = () => {
    const track = this.project.children[2].querySelector(".track");
    const cloneTrackSpan = track.querySelectorAll("span");

    while (
      this.project.getBoundingClientRect().width <=
      6 * document.documentElement.clientWidth
    ) {
      const cloneHeading = this.project
        .querySelector(".heading-primary")
        .cloneNode(true);
      //div
      this.project.children[1].appendChild(cloneHeading);

      cloneTrackSpan.forEach((span) => {
        const clone = span.cloneNode(true);
        track.appendChild(clone);
      });
    }

    this.offset = this.project.getBoundingClientRect().width / 2 + 100;
    this.project.children[1].style.transform = `translateX(calc(${-this
      .offset}px))`;

    setInterval(this.moveProject, 10);
    this.hoverProject();
  };

  moveProject = () => {
    if (!this.stop) {
      this.offset += this.direction * this.speed;
      if (this.direction > 0) {
        if (
          this.offset >=
          this.project.getBoundingClientRect().width / 2 +
            this.projectWidth +
            100
        ) {
          this.offset = this.project.getBoundingClientRect().width / 2 + 100;
          this.project.children[1].style.transform = `translateX(calc(${-this
            .offset}px))`;
        } else {
          this.project.children[1].style.transform = `translateX(calc(${-this
            .offset}px))`;
        }
      } else {
        if (
          this.offset <=
          this.project.getBoundingClientRect().width / 2 - this.projectWidth
        ) {
          this.offset = this.project.getBoundingClientRect().width / 2;
          this.project.children[1].style.transform = `translateX(calc(${-this
            .offset}px))`;
        } else {
          this.project.children[1].style.transform = `translateX(calc(${-this
            .offset}px))`;
        }
      }
    }
  };

  // ==================== Hover Project animation ====================
  hoverProject = (params) => {
    window.addEventListener("mousemove", (e) => {
      setTimeout(() => {
        this.project.children[0].style.top = e.pageY + "px";
        this.project.children[0].style.left = e.pageX + "px";
      }, 200);
    });

    this.project.children[1].addEventListener("mouseenter", () => {
      this.project.children[0].classList.toggle("active");
      this.stop = true;
    });

    this.project.children[1].addEventListener("mouseleave", () => {
      this.project.children[0].classList.toggle("active");
      this.stop = false;
    });
  };
}

projects.forEach((project, index) => {
  if (index % 2 == 0) new MoveInfite(project, 1);
  else new MoveInfite(project, -1);
});
