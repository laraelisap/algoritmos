// Função que altera o texto da história e os botões
function updateStory(text, option1Text, option2Text, option1Callback, option2Callback) {
    document.getElementById("story-text").innerText = text;
    document.getElementById("button-1").innerText = option1Text;
    document.getElementById("button-2").innerText = option2Text;

    document.getElementById("button-1").onclick = option1Callback;
    document.getElementById("button-2").onclick = option2Callback;
}

// Funções para cada caminho da história
function caminhoEsquerda() {
    updateStory(
        "Você encontra uma cabana misteriosa no caminho da esquerda. O que faz?",
        "Entrar na cabana",
        "Voltar para o caminho",
        entrarCabana,
        voltarCaminho
    );
}

function caminhoDireita() {
    updateStory(
        "Você encontra uma clareira iluminada. O que faz?",
        "Explorar a clareira",
        "Voltar para o caminho",
        explorarClareira,
        voltarCaminho
    );
}

function entrarCabana() {
    updateStory(
        "Dentro da cabana, você encontra um velho sábio que te oferece um enigma. O que faz?",
        "Aceitar o enigma",
        "Recusar e sair",
        aceitarEnigma,
        recusarEnigma
    );
}

function explorarClareira() {
    updateStory(
        "Na clareira, você vê uma árvore gigantesca com frutos dourados. O que faz?",
        "Pegar um fruto",
        "Voltar para o caminho",
        pegarFruto,
        voltarCaminho
    );
}

function voltarCaminho() {
    updateStory(
        "Você volta para a encruzilhada onde havia os dois caminhos.",
        "Caminho da esquerda",
        "Caminho da direita",
        caminhoEsquerda,
        caminhoDireita
    );
}

function aceitarEnigma() {
    updateStory(
        "O sábio te dá um presente mágico pela resposta certa ao enigma. Você segue feliz pela floresta.",
        "Fim da história",
        "",
        null,
        null
    );
}

function recusarEnigma() {
    updateStory(
        "Você sai da cabana e continua sua jornada pela floresta.",
        "Fim da história",
        "",
        null,
        null
    );
}

function pegarFruto() {
    updateStory(
        "Ao pegar o fruto, você é transportado para um mundo mágico. Você encontra um dragão.",
        "Enfrentar o dragão",
        "Fugir",
        enfrentarDragao,
        fugir
    );
}

function enfrentarDragao() {
    updateStory(
        "Você derrota o dragão e ganha um tesouro maravilhoso.",
        "Fim da história",
        "",
        null,
        null
    );
}

function fugir() {
    updateStory(
        "Você foge e encontra uma vila pacífica onde vive feliz.",
        "Fim da história",
        "",
        null,
        null
    );
}

// Inicia a história com a primeira escolha
caminhoEsquerda();
