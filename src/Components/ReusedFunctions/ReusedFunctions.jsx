 export const goTo = (target) =>{
    let data = document.querySelector(`#${target}`);
    window.scrollTo(0, data.offsetTop);
 }