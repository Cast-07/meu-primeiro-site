// Função para animação de rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Pega o ID do destino
        const targetElement = document.getElementById(targetId);
        
        // Rola suavemente até a seção de destino
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste para o topo da página
            behavior: 'smooth'
        });
    });
});

// Função para animação de Fade-In nas seções com rotação suave
const sections = document.querySelectorAll('section');
const options = {
    root: null, // O root é o viewport
    rootMargin: '0px',
    threshold: 0.2 // Aciona a animação quando 20% da seção se tornar visível
};

// Observer que detecta a visibilidade das seções na tela
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar depois que a animação foi acionada
        }
    });
}, options);

// Observa todas as seções para a animação
sections.forEach(section => {
    observer.observe(section);
});

// Função para efeito de zoom nas imagens ao passar o mouse com transição suave
const images = document.querySelectorAll('section img');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; // Aumenta o zoom um pouco mais sutil
        image.style.transition = 'transform 0.5s ease-out'; // Transição mais suave
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Função para alterar a cor da barra de navegação com efeito de "fade"
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(34, 34, 34, 0.9)'; // Cor mais escura com transparência
        navbar.style.transition = 'background-color 0.3s ease-in-out'; // Efeito de transição suave
    } else {
        navbar.style.backgroundColor = 'rgba(34, 34, 34, 1)';
    }
});

// Efeito para adicionar sombra e transição nas seções com um "bounce"
const sectionsWithHoverEffect = document.querySelectorAll('section');
sectionsWithHoverEffect.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'translateY(-8px)';
        section.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        section.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Suaviza a animação
    });

    section.addEventListener('mouseout', () => {
        section.style.transform = 'translateY(0)';
        section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Animação para os ícones sociais com efeito de "pulse"
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease-in-out';
        icon.style.animation = 'pulse 1s infinite'; // Animação de "pulse"
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
        icon.style.animation = 'none';
    });
});