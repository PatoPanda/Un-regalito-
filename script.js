let player;
const heartBtn = document.getElementById('heartBtn');
const statusText = document.getElementById('status');

// Tus frases personalizadas
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
let intervaloFrases;

// Conexión con el video de LÚA - Pensando en ti
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '_6j54PSb6ac', 
        playerVars: { 
            'autoplay': 0, 
            'controls': 0,
            'modestbranding': 1
        }
    });
}

function cambiarFrase() {
    statusText.innerText = frases[fraseIndex];
    fraseIndex = (fraseIndex + 1) % frases.length;
}

heartBtn.addEventListener('click', () => {
    // Estado 1 de YouTube significa "reproduciendo"
    if (player.getPlayerState() !== 1) {
        player.playVideo();
        heartBtn.classList.add('latir');
        cambiarFrase();
        // Cambia la frase cada 3 segundos
        intervaloFrases = setInterval(cambiarFrase, 3000); 
    } else {
        player.pauseVideo();
        heartBtn.classList.remove('latir');
        clearInterval(intervaloFrases);
        statusText.innerText = "Pausado";
    }
});
