let cartasClicadas = 0; // Contador de cartas clicadas

function mostrarMensagem(carta) {
    const mensagemDiv = document.getElementById('mensagem');
    const recado = document.getElementById('recado');

    // Resetando o estilo de fonte
    recado.style.fontSize = "18px"; // Resetando para o tamanho normal

    if (carta === 1) {
        recado.textContent = "You are the sun that brightens my day and the star that guides my way. Happy Valentine's Day!";
    } else if (carta === 2) {
        recado.textContent = "I love you more than yesterday, but less than tomorrow. I can't wait to spend the rest of my life by your side.";
    } else if (carta === 3) {
        recado.textContent = "You are my perfect partner. I am grateful every day to have you by my side. Te Amo!";
    } else if (carta === 4) { // Nova carta
        recado.textContent = "Kocham Cię!";
        recado.style.fontSize = "40px"; // Aumenta o tamanho da frase
        setTimeout(() => {
            mostrarChuvaDeCorações();
        }, 10000); // Aparece por 10 segundos e depois chove corações
    }

    cartasClicadas++; // Aumenta o contador de cartas clicadas
    mensagemDiv.style.display = 'block';

    if (cartasClicadas === 4) {
        setTimeout(() => {
            chuvaDeBeijos();
        }, 500); // Aguarda 500ms para exibir a chuva de beijinhos após as 4 cartas serem clicadas
    }
}

function mostrarChuvaDeCorações() {
    const chuva = document.createElement('div');
    chuva.classList.add('chuva');
    chuva.textContent = '❤️'.repeat(20); // Cria uma chuva de corações
    document.body.appendChild(chuva);
}

function chuvaDeBeijos() {
    const frases = [
        "Te amo!", "I love you!", "Ich liebe dich!", "Je t'aime!", "Ti amo!", "Te quiero!", "Saya cinta padamu!", "Volim Te!","Я тебя люблю!", "Afe mi!"
    ];

    let topPosition = -50;

    // Garantir que as frases não se sobreponham
    setTimeout(() => {
        frases.forEach((frase, index) => {
            const divFrase = document.createElement('div');
            divFrase.textContent = frase;
            divFrase.style.position = 'absolute';
            divFrase.style.left = '50%';
            divFrase.style.transform = 'translateX(-50%)';
            divFrase.style.fontSize = '24px';
            divFrase.style.color = 'white';
            divFrase.style.fontWeight = 'bold';
            divFrase.style.animation = `descerFrase 10s ease-in-out forwards ${index}s`; // A animação de descer

            document.body.appendChild(divFrase);
        });
    }, 2000); // Delay de 2s para evitar sobreposição antes da animação começar

    setTimeout(() => {
        location.reload(); // Reinicia as cartas após a chuva de beijinhos
    }, 20000);//reinicia após 20 segundos
}

// Adiciona a assinatura no canto inferior esquerdo
window.onload = function () {
    const assinatura = document.createElement('div');
    assinatura.id = 'assinatura';
    assinatura.innerHTML = '<i>&#169;</i> Made by Tatiane Santos';
    document.body.appendChild(assinatura);
}
