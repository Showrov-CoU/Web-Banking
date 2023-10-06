const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const faSolid = document.querySelector('.fa-solid');
const hLink = document.querySelectorAll('#hLink');

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
})
hLink.forEach((value)=>{
    value.addEventListener("click", ()=>{
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark');
    })
})