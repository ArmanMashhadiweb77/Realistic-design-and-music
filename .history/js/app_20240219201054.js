const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

navToggle.addEventListener("click", function(){
    navMenu.classList.toggle("show-menu");
});
function scrollHeader(){
    const nav = document.getElementById('header')
    if (this.scrollY >=80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll')
}
window.addEventListener('scroll',scrollHeader);

const section = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY =window.scrollY
    section.forEach(current=>{
        const sectionHeight =current.offseHeight,
        sectionTop= current.offsetTop -50,
        sectionid = current.getAttribute('id');
        if(scrollY >)
    })
        
    
}

