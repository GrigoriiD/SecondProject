const label = document.querySelector('.search__link')
const menu = document.querySelector('.menu')
const input = document.querySelector('.search_none')
label.addEventListener('click' ,() => {
    menu.classList.toggle('menu_search')
    input.classList.toggle('search_none')
    input.classList.toggle('search')
})