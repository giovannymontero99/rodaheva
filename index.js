const hamburguer = document.getElementById('hamburger');
const navUl = document.getElementById('navUl');
const tecnologias = document.querySelectorAll(".tecnologias-section");



// Esta funcion toma cada targeta y le agrega estilos cada ves que es observado por el usuario.
tecnologias.forEach(tecnologia => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entrie => {

            // Si el elemento NO es observado aplica los siguientes estilos
            if (!entrie.isIntersecting) {
                entrie.target.style.visibility = "hidden"
                return entrie.target.style.backgroundColor = "#12121a";
            }

            // Si el elemento SI es observado aplica los siguientes estilos
            entrie.target.style.visibility = "visible"
            return entrie.target.style.backgroundColor = "#242434";
        })
    }, { threshold: 1 });

    // Asignamos cual elemento va a aplicar los estilos
    observer.observe(tecnologia);
});



hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('is-active');
    navUl.classList.toggle('nav-is-active');
});

navUl.addEventListener("click", () => {
    hamburguer.classList.toggle('is-active');
    navUl.classList.toggle('nav-is-active')
});