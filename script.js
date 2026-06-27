// G. TECH CELULARES
// Script inicial

console.log("Site G. TECH CELULARES carregado com sucesso!");

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
