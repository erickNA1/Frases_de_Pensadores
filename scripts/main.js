const loader = document.querySelector('.loader')
const mainContent = document.querySelector('.main')

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        mainContent.style.display = 'block';
        mainContent.style.opacity = 1;
    }, 1000)
}

init();

const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu-link')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
});

function toggleMenu() {
    const offscreen = document.querySelector('.offscreen-menu');
    offscreen.classList.toggle('active');
}

