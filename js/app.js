let counter = 0;
var pages;
var main;

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
  
  const offset = homeButton.getBoundingClientRect().left
  const lineWidth = homeButton.clientWidth
  var line = document.getElementById("line")

  line.style.width = lineWidth + 'px';
  line.style.left = offset + 'px'

  homeButton.addEventListener("click", () => {
    moveLine(line, homeButton, offset)
    scrollH(0)
  });

  projectsButton.addEventListener("click", () => {
    moveLine(line, projectsButton, offset)
    scrollH(1)
  });

  galleryButton.addEventListener("click", () => {
    moveLine(line, galleryButton, offset)
    scrollH(2)
  });

  aboutButton.addEventListener("click", () => {
    moveLine(line, aboutButton, offset)
    scrollH(3)
  });
};

function moveLine(lineElement, buttonElement, offset) {
  lineElement.style.width = buttonElement.clientWidth + 'px';
  lineElement.style.transform = 'translate(' + Math.ceil(buttonElement.getBoundingClientRect().left - offset) + 'px)';

};

function scrollH(index) {
  pages.style.transition = 'transform 0.5s ease-in-out';
  pages.style.transform = 'translateX(' + (-100 * index) + 'vw)';
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const sectionParser = () => {
  pages = document.querySelector('.content-container');
  main = document.querySelector('main');
};

const app = () => {
  navSlide();
  underlines();
  sectionParser();
};

app();
