`console.log()`

document.addEventListener("DOMContentLoaded", function() {
const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const mobileLinks = document.querySelector(".mobile__links");
const button = document.querySelector(".burguer");


button.addEventListener("click", function() {
    mobileNavbar.classList.toggle("active");
});

  // Adiciona um ouvinte de evento de clique para cada link móvel
const mobileMenuLinks = document.querySelectorAll(".mobile__links a");
mobileMenuLinks.forEach(function(link) {
link.addEventListener("click", function() {
          // Fecha o menu móvel ao clicar em um link
mobileLinks.classList.remove("active");
});
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var distanceFromTop = window.pageYOffset;

    // Adicione uma classe à barra de navegação quando o usuário rolar para baixo além de 100px
    if (distanceFromTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

});




