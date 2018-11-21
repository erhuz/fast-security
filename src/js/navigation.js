import { setLang, updateContent } from "./lang";

export const init = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuItems = document.querySelectorAll(".menu-item > a");
  const langSelect = document.querySelector(".lang select");

  // Event listeners
  menuBtn.addEventListener("click", () => toggleFullpageNav());
  menuItems.forEach(item => {
    item.addEventListener("click", () => toggleFullpageNav());
  });
  langSelect.addEventListener("change", e => {
    setLang(e.target.value);
    updateContent();
  });
};

// Fullpage navigation
export const toggleFullpageNav = () => {
  const fullNav = document.querySelector(".full-nav");
  const menuBtn = document.querySelector(".menu-btn");
  const main = document.querySelector("main");
  const sectionNav = document.querySelector(".section-nav");

  if (fullNav.style.height == "100%") {
    fullNav.style.height = "48px"; // For header background, change to 48px
    menuBtn.classList.remove("active");
    main.classList.remove("blur");
    sectionNav.style.opacity = "1";
  } else {
    fullNav.style.height = "100%";
    menuBtn.classList.add("active");
    main.classList.add("blur");
    sectionNav.style.opacity = "0";
  }
};

// Fixed section navigation/indicator
export const setActiveSection = (origin, dest) => {
  const nav = document.querySelector(".section-nav");

  const positions = {
    1: "102px",
    2: "50px",
    3: "0px",
    4: "-50px",
    5: "-102px"
  };

  nav.style.transform = `translateY(${positions[dest + 1]})`;

  const navItems = nav.querySelector("ul").children;
  navItems[origin].classList.remove("active");
  navItems[dest].classList.add("active");
};

export const setActiveSlide = slide => {
  const slideIndicator = document.querySelector(
    ".section-nav li.active > span"
  );
  slideIndicator.innerText = slide;
};
