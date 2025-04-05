// mobile-navbar.js

// Função para habilitar a navegação responsiva no menu (exibição de menu em dispositivos móveis)
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.menu');
  
  // Verifica se o botão do menu existe e adiciona evento de clique
  if (menuButton) {
      menuButton.addEventListener('click', () => {
          // Alterna a classe 'active' no menu
          navMenu.classList.toggle('active');
      });
  }
});

// Função para rolar suavemente para um determinado elemento
function scrollToElement(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  }
}

// Função para exibir mensagens animadas (como as mensagens de conclusão ou sucesso)
function showMessage(message, duration = 3000) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message-popup');
  messageElement.textContent = message;
  
  document.body.appendChild(messageElement);
  
  setTimeout(() => {
      messageElement.style.opacity = '0';
      setTimeout(() => {
          messageElement.remove();
      }, 500);
  }, duration);
}

// Função para animar o scroll da página para o topo
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Adiciona o evento de clique no botão para rolar até o topo
const backToTopButton = document.querySelector('.back-to-top');
if (backToTopButton) {
  backToTopButton.addEventListener('click', scrollToTop);
}

// Exemplo de como mostrar uma mensagem de sucesso
showMessage("Bem-vindo ao One Piece!");