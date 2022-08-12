const menuBtn = document.getElementById('menu-button-first');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const intro = document.getElementById('intro-link');
const showcase = document.getElementById('showcase-link');
const projects = document.getElementById('projects-link');
const resume = document.getElementById('resume-link');
const footer = document.getElementById('footer-link');

nav.style.visibility = 'none';

menu.addEventListener('click', () => {
    nav.style.visibility = 'none';
});

menuBtn.addEventListener('mouseenter', () => {
    nav.style.visibility =  'visible';
});

