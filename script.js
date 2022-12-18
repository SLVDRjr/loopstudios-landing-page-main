const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".toggle-menu");
const header = document.querySelector("header");


toggleMenu.addEventListener('click', () => {
  const visibility = menu.getAttribute("data-visible");
  

  if (visibility === "false") {
    menu.setAttribute("data-visible", true);
    toggleMenu.setAttribute("area-expanded", true);
    header.setAttribute("area-expanded", true);
  } else if (visibility === "true") {
    menu.setAttribute("data-visible", false);
    toggleMenu.setAttribute("area-expanded", false);
    header.setAttribute("area-expanded", false);
  }

  
});


