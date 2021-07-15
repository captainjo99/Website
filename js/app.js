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
  const line = document.getElementById("line")

  homeButton.addEventListener("click", () => {
    line.style.width = homeButton.style.minWidth
    line.style.position = homeButton.style.position
  });
};


const app = () => {
  navSlide();
  underlines();
};

app();
