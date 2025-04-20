const getYear =document.getElementById('get-year');
getYear.innerHTML = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggler');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});