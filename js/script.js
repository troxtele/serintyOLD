const modeToggle = document.querySelector(".mode-toggle");
const menuArrow = document.querySelector(".submenu");
const toggleMobileNav = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav_large");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const html = document.querySelector("html")

// Mode mode toggle
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
});

// navbar shadow on scorll
window.addEventListener("scroll", () => {
  // header Drop down
  if (window.scrollY > 20) {
    nav.classList.add("nav-drop-shadow");
    nav.style.padding = "0.5rem 0";
  } else {
    nav.classList.remove("nav-drop-shadow");
    nav.style.padding = "1rem 0";
  }
});

// Toggle Submenu
const submenu = (ele) => {
  const parent = ele.parentElement;
  const svg = parent.querySelector(".arrow-svg");
  const submenu = parent.querySelector(".submenu");
  console.log(submenu);
  submenu.classList.toggle("toggle-height");
  svg.classList.toggle("rotate-svg");
};

// Toggle Hamburger
const hamburger = () => {
  toggleMobileNav.classList.toggle("toggle-mobile-menu");
  html.classList.toggle("hidden-overflow")
};
