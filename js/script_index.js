// Logo Container to Main Page

const logoButton = document.getElementById("logoToMainPage");
logoButton.addEventListener('click', () => {
    window.location.href = "index.html";
})

// Boton Toggle para la version Mobile del sitio

const menu = document.querySelector('.menu-toggle');
const headerList = document.querySelector('.header-list');
menu.addEventListener('click', () => {
    headerList.classList.toggle('open');
});

// EventListener del boton Comprar

const btnComprar = document.querySelector('.btn-comprar');
btnComprar.addEventListener('click', () => {
    let urlRedirect = "comprar_tickets.html";

    window.location.href = urlRedirect;
})

// EventListener del boton Orador

const btnOrador = document.querySelector('.btn-orador');
const formArea = document.getElementById('formularioAnchor');
btnOrador.addEventListener('click', () => {
    formArea.scrollIntoView({behavior : "smooth"});
})