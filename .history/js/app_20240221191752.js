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
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY>=560)scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
} 
window.addEventListener('scroll',scrollUp)  


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-toggle-on'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi-toggle-off' : 'bi-toggle-on'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bi-toggle-off' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

