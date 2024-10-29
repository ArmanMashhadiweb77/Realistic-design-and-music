const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

navToggle.addEventListener("click", function(){
    navMenu.classList.toggle("show-menu");
});
function scrollHeader(){
    const nav = document.getElementById('header')
    if (this.scrollY >=80) nav.classList.add('scroll-header'); else nav.classList.r
}
window.addEventListener('scroll',scrollHeader)
