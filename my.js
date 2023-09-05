
let activeManu = document.querySelector('.activeManu');
let leftMenu = document.querySelector('.leftMenu');
let closeMenu = document.querySelector('.close-menu');

activeManu.addEventListener('click',()=>{
    closeMenu.style.display = 'initial';
    leftMenu.style.display='initial';
})

closeMenu.addEventListener('click',()=>{
    closeMenu.style.display = 'none';
    leftMenu.style.display='none';
})

