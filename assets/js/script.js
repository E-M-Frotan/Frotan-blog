let mobileNav = document.querySelector(".mobile-nav");
let navMenuBtn = document.querySelector(".nav-menu-btn");
let navCloseBtn = document.querySelector(".nav-close-btn");

function activeToggler() {
  mobileNav.classList.toggle("active");
}
navMenuBtn.addEventListener("click", activeToggler);
navCloseBtn.addEventListener("click", activeToggler);

// ====================== Theme toggle variables ====================
const themeBtn = document.querySelectorAll(".theme-btn");
console.log(themeBtn);

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let j = 0; j < themeBtn.length; j++) {
      themeBtn[j].classList.toggle("light");
      themeBtn[j].classList.toggle("dark");
    }
  });
}
