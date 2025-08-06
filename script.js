// Fecha de inicio de la relación (06 de abril de 2024)
// Ajustado para mostrar 22 horas
const startDate = new Date('2024-04-06 00:00:00'); // Ajustado para mostrar 22 horas

// Función para calcular el tiempo transcurrido
function updateCountdown() {
    const now = new Date();
    const timeDiff = now - startDate;
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Actualizar countdown cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Llamada inicial

// Efectos de parallax para los corazones
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    heart.style.transition = 'all 3s linear';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.top = '-10vh';
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 3000);
}

// Crear corazones flotantes cada 2 segundos
setInterval(createFloatingHeart, 2000);

// Efectos de hover para las fotos
document.querySelectorAll('.photo-frame').forEach(frame => {
    frame.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    frame.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Animación de entrada para los elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.photo-container, .message-card, .milestone');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Aplicar estilos iniciales para animación
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.photo-container, .message-card, .milestone');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Llamar animación inicial
    setTimeout(animateOnScroll, 100);
});

// Escuchar scroll para animaciones
window.addEventListener('scroll', animateOnScroll);

// Efecto de typing para el título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efecto de typing al título después de cargar
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    
    setTimeout(() => {
        typeWriter(title, originalText, 150);
    }, 500);
});

// Efecto de confeti para celebrar
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ff69b4', '#ff1493', '#ff69b4'];
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1000';
    confetti.style.animation = 'fall 3s linear forwards';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        document.body.removeChild(confetti);
    }, 3000);
}

// Crear confeti ocasionalmente
setInterval(createConfetti, 5000);

// Añadir estilos CSS para la animación de confeti
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(confettiStyle);

// Efecto de brillo en el título
function addGlowEffect() {
    const title = document.querySelector('.title');
    title.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 30px rgba(255,105,180,1), 0 0 40px rgba(255,105,180,0.8)';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
    });
}

// Aplicar efecto de brillo
document.addEventListener('DOMContentLoaded', addGlowEffect);

// Efecto de partículas de amor
function createLoveParticle() {
    const particle = document.createElement('div');
    particle.innerHTML = '💕';
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '100vh';
    particle.style.fontSize = '20px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.animation = 'floatUp 4s ease-out forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        document.body.removeChild(particle);
    }, 4000);
}

// Añadir estilos para las partículas de amor
const loveParticleStyle = document.createElement('style');
loveParticleStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(loveParticleStyle);

// Crear partículas de amor cada 3 segundos
setInterval(createLoveParticle, 3000);

// Efecto de click para crear corazones
document.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = (e.clientX - 10) + 'px';
    heart.style.top = (e.clientY - 10) + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'clickHeart 1s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 1000);
});

// Añadir estilos para el efecto de click
const clickHeartStyle = document.createElement('style');
clickHeartStyle.textContent = `
    @keyframes clickHeart {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(clickHeartStyle);

// Mensaje especial cada 15 segundos
const loveMessages = [
    "Te amo más cada día ❤️",
    "Eres mi todo 💕",
    "Gracias por estos 15 meses 💖",
    "Contigo todo es posible 💝",
    "Mi amor por ti crece cada día ❤️"
];

function showLoveMessage() {
    const message = document.createElement('div');
    message.textContent = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.background = 'linear-gradient(135deg, #ff69b4, #ff1493)';
    message.style.color = 'white';
    message.style.padding = '15px 30px';
    message.style.borderRadius = '25px';
    message.style.fontSize = '1.1rem';
    message.style.fontWeight = 'bold';
    message.style.zIndex = '1000';
    message.style.boxShadow = '0 5px 20px rgba(255,105,180,0.3)';
    message.style.animation = 'slideIn 0.5s ease-out';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOut 0.5s ease-in forwards';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 500);
    }, 3000);
}

// Añadir estilos para los mensajes
const messageStyle = document.createElement('style');
messageStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(-50%) translateY(-100px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(messageStyle);

// Mostrar mensaje cada 15 segundos
setInterval(showLoveMessage, 15000);

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('¡Página de amor cargada! ❤️');
    
    // Mostrar mensaje inicial
    setTimeout(showLoveMessage, 2000);
}); 