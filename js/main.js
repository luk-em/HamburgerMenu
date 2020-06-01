const hamburger = document.querySelector(".hamburger");

const iconHamburger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');
const column = document.querySelector('aside');
const text = document.querySelector('.wrapper');

hamburger.addEventListener('click', function () {
    iconHamburger.classList.toggle('show');
    iconX.classList.toggle('show');
    column.classList.toggle('show');
    text.classList.toggle('show');
})