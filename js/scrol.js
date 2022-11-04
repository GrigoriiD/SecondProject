const headerTop = document.querySelector('.header__top-inner')
const main = document.querySelector('.header__content-container')
const headerHeight = headerTop.offsetHeight;
const maintHeight = main.offsetHeight;
let lastScrollTop = 80;
console.log(window.innerWidth);
if (window.innerWidth > 1257) {
    window.addEventListener('scroll',() => {
        let scrolDistance = parseInt(window.scrollY)    
        if (scrolDistance <= lastScrollTop) {       
            headerTop.classList.add('header_fixed')
            headerTop.classList.remove('header_unfixed')   
            main.classList.add('header_fixed-mar')   
        }
        else{
            console.log(maintHeight);
            if (scrolDistance >= headerHeight ){
                headerTop.classList.add('header_unfixed')
               
            }         
         }  
            lastScrollTop = scrolDistance    
        if (scrolDistance <= headerHeight) {
            headerTop.classList.remove('header_fixed')
            main.classList.remove('header_fixed-mar')
        }
    }) 
}
