// Função para criar corações flutuantes
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.opacity = '0.8';
    heart.style.animation = `floatHeart ${Math.random() * 3 + 4}s linear`;
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    // Remover o coração depois que a animação terminar
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Criar corações periodicamente
setInterval(createFloatingHeart, 300);

// Array de mensagens surpresa
const surpriseMessages = [
    "Você é a razão do meu sorriso! 😊",
    "Cada dia com você é uma nova aventura! 💫",
    "Meu coração bate mais forte por você! ❤️",
    "Você é o amor da minha vida! 💑",
    "Juntos somos mais fortes! 💪",
    "Você me faz querer ser melhor a cada dia! 🌟",
    "Nosso amor é infinito! ∞",
    "Te amo mais que ontem e menos que amanhã! 💕",
    "Seu sorriso ilumina até os meus dias mais nublados! ☀️",
    "Com você, a vida ficou mais bonita. 🌹",
    "Você é meu lugar favorito no mundo. 🌍❤️",
    "Não preciso de mais nada, só você já é tudo. 💖",
    "Amar você é a minha parte favorita do dia! 🕊️",
    "Se eu pudesse, colocaria o mundo aos seus pés. 👑",
    "Você é a resposta de todas as minhas orações. 🙏💘",
    "Meu futuro faz sentido porque você está nele. 🔮💑",
    "A melhor parte da minha história é você. 📖💕",
    "Te amar é fácil... viver sem você, impossível. 🥺❤️",
    "Você é meu presente, meu agora e meu sempre. 🎁⏳",
    "Nada é mais certo pra mim do que nós dois. ✔️💍",
    "Você é meu sonho acordado. 🌙💭",
    "Cada detalhe seu me encanta mais. ✨",
    "A cada batida do meu coração, tem um ‘eu te amo’. 💓",
    
    
];

// Função para mostrar mensagem surpresa
function showSurprise() {
    const message = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    
    // Criar e estilizar o elemento da mensagem
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.position = 'fixed';
    messageElement.style.top = '50%';
    messageElement.style.left = '50%';
    messageElement.style.transform = 'translate(-50%, -50%)';
    messageElement.style.background = 'rgba(255, 255, 255, 0.95)';
    messageElement.style.padding = '2rem';
    messageElement.style.borderRadius = '15px';
    messageElement.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    messageElement.style.fontSize = '1.5rem';
    messageElement.style.fontFamily = "'Dancing Script', cursive";
    messageElement.style.color = '#ff6b6b';
    messageElement.style.textAlign = 'center';
    messageElement.style.zIndex = '1000';
    messageElement.style.animation = 'fadeIn 0.5s ease';
    
    // Adicionar animação CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
    `;
    document.head.appendChild(style);
    
    // Adicionar ao corpo do documento
    document.body.appendChild(messageElement);
    
    // Criar explosão de corações
    for (let i = 0; i < 15; i++) {
        setTimeout(createFloatingHeart, i * 100);
    }
    
    // Remover a mensagem após 3 segundos
    setTimeout(() => {
        messageElement.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            messageElement.remove();
            style.remove();
        }, 500);
    }, 3000);
} 