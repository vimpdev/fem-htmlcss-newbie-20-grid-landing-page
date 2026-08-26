const toggleBtn = document.querySelector(".toggle-btn");
const headerNav = document.querySelector(".header__nav");
const body = document.body;
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

let isMenuOpen = false;

function setMenuState(isOpen) {
  toggleBtn.ariaExpanded = String(isOpen);
  toggleBtn.ariaLabel = isOpen ? "Close menu" : "Open menu";

  toggleBtn.classList.toggle("is-expanded", isOpen);
  headerNav.classList.toggle("is-expanded", isOpen);
  body.classList.toggle("is-menu-open", isOpen);

  main.inert = isOpen;
  footer.inert = isOpen;
  headerNav.inert = !isOpen;
}

function handleToggle() {
  isMenuOpen = !isMenuOpen;
  setMenuState(isMenuOpen);
}

function handleKeydown(e) {
  if (e.key === "Escape" && isMenuOpen) {
    isMenuOpen = false;
    setMenuState(isMenuOpen);
    toggleBtn.focus();
  }
}


export function initMenu() {
  setMenuState(isMenuOpen);

  toggleBtn.addEventListener("click", handleToggle);
  document.addEventListener("keydown", handleKeydown);
}