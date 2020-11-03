const navbar = document.querySelector(".main-nav");
const sectionHome = document.getElementById("home");
const ul = document.querySelector(".nav");
const link = document.querySelectorAll(".nav-link");
const burger = document.querySelector(".burger");
const name = document.querySelector(".name-input");
const subject = document.querySelector(".subject-input");
const email = document.querySelector(".email-input");
const phone = document.querySelector(".phone-input");
const message = document.querySelector(".message-input");
const submitForm = document.getElementById("submitForm");
const showcaseContent = document.querySelector(".showcase-content");
const slider = document.querySelector(".slider");
const title = document.querySelector(".showcase-title");
const heading = document.querySelector(".showcase-title-heading");
const btnLink = document.querySelector(".btn-link");

//Switch color of active link
link.forEach(function (item) {
  item.addEventListener("click", function (e) {
    ul.querySelector(".current").classList.remove("current");
    ul.classList.remove("nav-active");
    item.classList.add("current");
  });
});

//Change active link in section on scroll
window.addEventListener("scroll", function (e) {
  const fromTop = window.scrollY + 100;

  link.forEach(function (item) {
    const section = document.querySelector(item.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      item.classList.add("current");
    } else {
      item.classList.remove("current");
    }
  });
});

//Navbar color change on scroll
const sectionHomeOptions = {
  rootMargin: "-100% 0px 0px 0px",
};

const sectionHomeObserver = new IntersectionObserver(function (
  entries,
  sectionHomeObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.style.background = "rgb(26, 26, 26)";
    } else {
      navbar.style.background = "transparent";
    }
  });
},
sectionHomeOptions);

sectionHomeObserver.observe(sectionHome);

//Slide out menu on click
burger.addEventListener("click", function () {
  ul.classList.toggle("nav-active");
});

//Scroll-up button active on scroll
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function (e) {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//Check contact fields

submitForm.addEventListener("submit", checkContact);

function checkContact(e) {
  if (
    name.value === "" ||
    subject.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    message.value === ""
  ) {
    alert("Please fill out all fields!");
    e.preventDefault();
  }
}

// Homepage animation
const tl = new TimelineMax();

tl.fromTo(
  showcaseContent,
  1,
  { height: "0%" },
  { height: "100%", ease: Power2.easeInOut }
);
tl.fromTo(
  showcaseContent,
  1.2,
  { width: "80%" },
  { width: "100%", ease: Power2.easeInOut }
);
tl.fromTo(navbar, 0.5, { opacity: 0, x: 40 }, { opacity: 1, x: 0 });
tl.fromTo(title, 2, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut });
