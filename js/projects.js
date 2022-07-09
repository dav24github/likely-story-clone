const projectsWrapper = document.querySelector(".projects__wrapper");
const projects = Array.from(projectsWrapper.children);

class MoveInfite {
  constructor(project, direction) {
    this.offset = 0;
    this.project = project;
    this.projectWidth = this.project.getBoundingClientRect().width;
    this.speed = this.projectWidth * 0.0005;
    this.direction = direction;

    this.start();
  }

  start = () => {
    while (
      this.project.getBoundingClientRect().width <=
      6 * document.documentElement.clientWidth
    ) {
      const clone = this.project.children[0].cloneNode(true);
      this.project.appendChild(clone);
    }

    this.offset = this.project.getBoundingClientRect().width / 2 + 100;
    this.project.style.transform = `translateX(calc(${-this.offset}px))`;

    setInterval(this.moveProject, 10);
  };

  moveProject = () => {
    this.offset += this.direction * this.speed;
    if (this.direction > 0) {
      if (
        this.offset >=
        this.project.getBoundingClientRect().width / 2 + this.projectWidth + 100
      ) {
        this.offset = this.project.getBoundingClientRect().width / 2 + 100;
        this.project.style.transform = `translateX(calc(${-this.offset}px))`;
      } else {
        this.project.style.transform = `translateX(calc(${-this.offset}px))`;
      }
    } else {
      if (
        this.offset <=
        this.project.getBoundingClientRect().width / 2 - this.projectWidth
      ) {
        this.offset = this.project.getBoundingClientRect().width / 2;
        this.project.style.transform = `translateX(calc(${-this.offset}px))`;
      } else {
        this.project.style.transform = `translateX(calc(${-this.offset}px))`;
      }
    }
  };
}

projects.forEach((project, index) => {
  if (index % 2 == 0) new MoveInfite(project, 1);
  else new MoveInfite(project, -1);
});
