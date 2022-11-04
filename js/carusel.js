const prev = document.getElementById('header__btn-right')
const next = document.getElementById('header__btn-left')
const slide = document.querySelectorAll('.header__content-center')
const dots = document.querySelectorAll('.header__decor-items')
const img = document.querySelector('.header')
let index = 0;
if (window.innerWidth > 799) {
const activeSlide = (i) =>{
    slide.forEach((el) =>{
        el.classList.remove('active')
    })
    dots.forEach((el) =>{
        el.classList.remove('active__decore')
    })
    dots[i].classList.add('active__decore')
    slide[i].classList.add('active')
}
const nextSlide = () =>{
    if (slide.length - 1 == index) {
        index = 0;
        img.style.backgroundImage = `url(../img/header${index}.jpg)`
        return activeSlide(index)
    }
    index ++
    //add img
    img.style.backgroundImage = `url(../img/header${index}.jpg)`
    return activeSlide(index)
}
const prevSlide = () =>{
    if (index == 0) {
        index = slide.length - 1;
        img.style.backgroundImage = `url(../img/header${index}.jpg)`
        return activeSlide(index)
    }
    index --
    img.style.backgroundImage = `url(../img/header${index}.jpg)`
    return activeSlide(index)
}
dots.forEach((el,indexOf) =>{
    el.addEventListener('click',() =>{
        index = indexOf
        activeSlide(index)
        img.style.backgroundImage = `url(../img/header${index}.jpg)`
    })
    })
setInterval(() => nextSlide(), 8000);
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
}