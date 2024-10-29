const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navLink = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", function(){
    navMenu.classList.toggle("show-menu");
});
navLink.forEach(n=> n.addEventListener('click',linkAction))
function scrollHeader(){
    const nav = document.getElementById('header')
    if (this.scrollY >=80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll')
}
window.addEventListener('scroll',scrollHeader);

const section = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.scrollY
    section.forEach(current=>{
        const sectionHeight =current.offsetHeight,
        sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('')
        } else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('')
        }
    })
}
window.addEventListener('scroll',scrollActive) 
fu   


