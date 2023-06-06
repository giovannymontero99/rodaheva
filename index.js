const hamburguer = document.getElementById('hamburger');
const navUl = document.getElementById('navUl');

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('is-active');
    navUl.classList.toggle('nav-is-active');
});

navUl.addEventListener("click", ()=>{
    hamburguer.classList.toggle('is-active');
    navUl.classList.toggle('nav-is-active')
});