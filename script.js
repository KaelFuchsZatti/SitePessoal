// SCROLL SUAVE AO CLICAR NO MENU
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// BOTÃO VOLTAR AO TOPO
const botaoTopo = document.getElementById('topo');

window.addEventListener('scroll', () => {

    // MOSTRAR/ESCONDER BOTÃO
    if (window.scrollY > 300) {
        botaoTopo.style.display = 'block';
    } else {
        botaoTopo.style.display = 'none';
    }

    // ANIMAÇÃO DAS SEÇÕES AO ROLAR
    const elementos = document.querySelectorAll('section');

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });

});


// CLICK NO BOTÃO TOPO
botaoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// 🔥 IMPORTANTE: MOSTRAR CONTEÚDO AO CARREGAR A PÁGINA
window.addEventListener('load', () => {
    const elementos = document.querySelectorAll('section');

    elementos.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
    });
});