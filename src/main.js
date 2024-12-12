const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelector(".nav__menu__link");
const navbar = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    linksContainer.classList.toggle("active");
    hamburger.classList.toggle("active");
});

navbar.onload(() =>{
    navbar.toggle("active");
});

window.addEventListener("resize", () =>{
    if (window.matchMedia("max-width:550px").matches){
        closeMenu();
    }
});

if(window.matchMedia("(max-width:550px").matches){
    closeMenu();
}

function closeMenu(){
    links.forEach((links) =>{
        links.addEventListener("click", () =>{
            linksContainer.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
}
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scroll;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-px";
  }
  prevScrollpos = currentScrollPos;
}