const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav li");

  burger.addEventListener("click", () => {
    //Toggle burger
    nav.classList.toggle("burger-active");
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.8
          }s`;
      }
    });
    //Burger animation
    burger.classList.toggle('toggle');
  });
};

const underlines = () => {
  const homeButton = document.getElementById("home");
  const projectsButton = document.getElementById("projects");
  const galleryButton = document.getElementById("gallery");
  const aboutButton = document.getElementById("about");
  /* const offset = parseInt(window.getComputedStyle(links).marginLeft.replace("px", "")) - links.getBoundingClientRect().left; */
  const offset = homeButton.getBoundingClientRect().left
  var line = document.getElementById("line")

  line.style.width = homeButton.clientWidth + 'px';
  line.style.left = offset + 'px'

  homeButton.addEventListener("click", () => {
    moveLine(line, homeButton, offset)
  });

  projectsButton.addEventListener("click", () => {
    moveLine(line, projectsButton, offset)
  });

  galleryButton.addEventListener("click", () => {
    moveLine(line, galleryButton, offset)
  });

  aboutButton.addEventListener("click", () => {
    moveLine(line, aboutButton, offset)
  });
};

function moveLine(lineElement, buttonElement, offset) {
  lineElement.style.width = buttonElement.clientWidth + 'px';
  lineElement.style.transform = 'translate(' + Math.ceil(buttonElement.getBoundingClientRect().left - offset) + 'px)';

}

const app = () => {
  navSlide();
  underlines();
};

app();
