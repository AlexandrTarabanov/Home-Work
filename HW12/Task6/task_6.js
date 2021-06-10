let menuElem = document.querySelector('.menu')
let titleElem = document.querySelector('.button')

titleElem.onclick = () => {
    menuElem.classList.toggle('open')
};