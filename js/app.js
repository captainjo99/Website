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

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const app = () => {
  navSlide();
};

app();
