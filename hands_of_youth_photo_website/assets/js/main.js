
const navButton = document.querySelector(".nav_toggle");
const navLinks = document.querySelector(".nav_links");

if (navButton && navLinks) {
  navButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}
