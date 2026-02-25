let player;
const heartBtn = document.getElementById('heartBtn');
const floatingContainer = document.getElementById('floating-container');

const frases = [
    "te amo",
    "Un mes más mi lady :3",
    "Juntos por siempre",
    "Eres mi mundo",
    ":3",
    "<3",
    "Estoy aquí para ti",
    "Te doy mi corazón",
    "Para toda la vida si?"
];

let fraseIndex = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '_6j54PSb6ac', 
        playerVars: { 'autoplay': 0, 'controls': 0 }
    });
}

function crearFraseFlotante() {
    const span = document.createElement('span');
    span.className = 'frase-flotante';
    span.innerText = frases[fraseIndex];
    
    // Posición aleatoria cerca del centro
    const x = Math.random() * 100 - 50; 
    span.style.left = `calc(50% + ${x}px)`;
    span.style.top = `50%`;

    document.body.appendChild(span);

    // Avanzar a la siguiente frase
    fraseIndex = (fraseIndex + 1) % frases.length;

    // Eliminar el elemento después de que termine la animación
    setTimeout(() => {
        span.remove();
    }, 4000);
}

heartBtn.addEventListener('click', () => {
    // Iniciar música si no está sonando
    if (player.getPlayerState() !== 1) {
        player.playVideo();
        heartBtn.classList.add('latir');
        document.getElementById('status').style.display = 'none';
    }

    // Cada vez que se aprieta, sale una frase
    crearFraseFlotante();
});
