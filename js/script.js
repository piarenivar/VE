let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro-logo');

window.addEventListener('load', () => {
    logo.classList.add('intro-logo-active');

    setTimeout(() => {
        intro.style.transform = 'translateY(-100%)';
    }, 2800)
});

const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");
    const brand = document.querySelector(".navbar-brand");

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle("toggle");
        nav.classList.toggle("nav-slide");
        brand.classList.toggle("navbar-brand-active");
    });
}

navSlide();