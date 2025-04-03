document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Suave ao Clicar nos Links do Menu
    document.querySelector("nav").addEventListener("click", (e) => {
        if (e.target.tagName === "A" && !e.target.classList.contains("social-icon")) {
            const targetId = e.target.getAttribute("href");

            if (!targetId.startsWith("http")) {
                e.preventDefault();
                document.querySelector(targetId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });

    // 2. Animação de Fade-In e Rotação Suave ao Rolagem
    const observerOptions = { threshold: 0.2 };
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll("section").forEach(section => fadeInObserver.observe(section));

    // 3. Efeito de Zoom Suave nas Imagens ao Passar o Mouse
    document.querySelectorAll("section img").forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

    // 4. Alterar a Cor da Barra de Navegação ao Rolar a Página
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        const scrollValue = window.scrollY;
        navbar.style.backgroundColor = `rgba(34, 34, 34, ${Math.min(1, 0.6 + scrollValue / 300)})`;
    });

    // 5. Adicionar Sombras e Animação Bounce nas Seções
    document.querySelectorAll("section").forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.transform = "translateY(-8px)";
            section.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.15)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.transform = "translateY(0)";
            section.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.1)";
        });
    });

    // 6. Efeito de "Pulse" nos Ícones Sociais
    document.querySelectorAll(".social-icon").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.classList.add("pulse-effect");
        });

        icon.addEventListener("mouseleave", () => {
            icon.classList.remove("pulse-effect");
        });
    });
});