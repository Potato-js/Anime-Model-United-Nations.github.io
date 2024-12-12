const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelector(".nav__menu__link");
const navbar = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    linksContainer.classList.toggle("active");
    hamburger.classList.toggle("active");
});

window.addEventListener("resize", () =>{
    if (window.matchMedia("max-width:550px").matches){
        closeMenu();
    }
});

addEventListener("scroll", () =>{
    navbar.classList.toggle("active");
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
    navbar.style.top = "0";
    var currentScrollPos = window.scrollY;
    if (window.scrollY == "0"){
        navbar.style.top = "-60px";
    }
}