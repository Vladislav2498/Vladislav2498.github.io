'use strict'

const btn = document.querySelector('.navigation__nav-bar')

btn.addEventListener('click', () => {
    let img = document.querySelector('.navigation__nav-bar img')
    if (document.querySelector(".navigation-items").classList.toggle("show")) {
        img.src = './dist/img/close-hover.png'
    } else {
        img.src = './dist/img/icons8-bars-24.png'
    }
})
