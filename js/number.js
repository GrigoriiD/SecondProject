//time //ms
function outNam (element,steap = 5,time = 10) {
    let l = document.querySelector(`#`+element)
    let num = l.innerHTML;
    let n = 0;
    const interval = setInterval(() => {
        n = n + steap;
        if (n >= num ) {
            l.innerHTML = num
            clearInterval(interval)
        }
        else{
            l.innerHTML = n
        }
    }, time);   
}
let scrol = () => {
    if (scrollY >= 3840) {
        outNam('launched',21,50)
        outNam('blog',34,30)
        outNam('likes',19,50)
        outNam('cups',4,44)
        outNam('satisfied',55,34)
        window.removeEventListener('scroll', scrol)
    }
    console.log(scrollY);
}
window.addEventListener('scroll', scrol)
