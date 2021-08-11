const animTime = 500;
let btnClicked = true;
let btnClickedValue;

const init = () => {
  $(document).ready(function () {
    $(".cookieBtn").click(function () {
      $(".cookie").css("display", "none");
    });
    $(".contact-btn").click(function () {
      $(".contact-form").css("display", "flex");
    });
    handleAnimation(".animText");
    $(window).scroll(function () {
      handleAnimation(".animText");
    });
    animateBtmLine("#line", $("#home-button"), 0);
    $(".navLink").click(function () {
      btnClicked = true;
      btnClickedValue = $(this).text().toLowerCase();
    });
    btnClicked = false;
  });
};

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
        link.style.animation = `linkFade 0.5s ease forwards ${
          index / 7 + 0.8
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

const scrollHandler = () => {
  const options = {
    threshold: 0.5,
  };
  let observer = new IntersectionObserver(navCtrl, options);
  $(".content").each(function () {
    observer.observe($(this)[0]);
  });
};

function navCtrl(entries) {
  entries.forEach((entry) => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      if (btnClicked) {
        if (btnClickedValue == id) {
          handleNav(id, ".navLink", "#line", animTime);
          btnClicked = false;
        }
      } else {
        handleNav(id, ".navLink", "#line", animTime);
      }
    }
  });
}

const app = () => {
  particlesJS.load("particles-js", "assets/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
  init();
  navSlide();
  scrollHandler();
};

app();
