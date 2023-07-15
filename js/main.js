'use strict';

let closeIcon = document.querySelector('.close-icon');
let openIcon = document.querySelector('.open-icon');
let burgerMenu = document.querySelector('.burger-menu');
let menuList = document.querySelector('.burger-menu__list');


openIcon.addEventListener('click', function() {
    burgerMenu.style.width = '100%';
    menuList.style.top = '50%';
});

closeIcon.addEventListener('click', function() {
    burgerMenu.style.width = '0%';
    menuList.style.top = '-35%';
});

