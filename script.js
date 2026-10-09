const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const nomeJogador = document.querySelector(".nome-jogador");
const caixaInicio = document.querySelector(".caixa-inicio");
const botaoJogar = document.querySelector("#botao-jogar");

// Lista de nomes
const nomes = [
    "Ana",
    "Pedro",
    "Mariana",
    "Lucas",
    "Julia",
    "Gabriel",
    "Beatriz",
    "Rafael",
    "Larissa",
    "Matheus",
    "Camila",
    "Felipe",
    "Isabela",
    "Gustavo",
    "Sofia",
    "Miguel",
    "Laura",
    "Arthur",
    "Helena",
    "Enzo"
];

// Perguntas do quiz
const perguntas = [
    {
        enunciado: "Seu fim de semana ideal seria:",
        alternativas: [
            {
                texto: "A) Fazer algo diferente e sair da rotina",
                afirmacao: "A"
            },
            {
                texto: "B) Ficar em casa e aproveitar o descanso",
                afirmacao: "B"
            }
        ]
    },

    {
        enunciado: "Quando surge um problema, você:",
        alternativas: [
            {
                texto: "A) Age rapidamente e resolve na hora",
                afirmacao: "A"
            },
            {
                texto: "B) Pensa com calma antes de tomar uma decisão",
                afirmacao: "B"
            }
        ]
    },

    {
        enunciado: "Em uma viagem, você prefere:",
        alternativas: [
            {
                texto: "A) Explorar lugares novos sem muito planejamento",
                afirmacao: "A"
            },
            {
                texto: "B) Ter tudo planejado e saber o que esperar",
                afirmacao: "B"
            }
        ]
    },

    {
        enunciado: "Seus amigos provavelmente diriam que você é:",
        alternativas: [
            {
                texto: "A) Espontâneo(a) e cheio(a) de energia",
                afirmacao: "A"
            },
            {
                texto: "B) Calmo(a) e equilibrado(a)",
                afirmacao: "B"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

let respostasA = 0;
let respostasB = 0;

// Escolher um nome aleatório
function sortearNome() {
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);

    return nomes[indiceAleatorio];
}

// Começar o quiz
function iniciarJogo() {

    // Sortear um nome para esta partida
    nomeJogador.textContent = "Jogador(a): " + sortearNome();

    // Esconder a tela inicial
    caixaInicio.style.display = "none";

    // Limpar o resultado anterior
    textoResultado.textContent = "";

    caixaResultado.style.display = "none";

    // Reiniciar as respostas
    atual = 0;
    respostasA = 0;
    respostasB = 0;

    // Mostrar a primeira pergunta
    mostraPergunta();
}

// Mostrar as perguntas
function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

// Mostrar as alternativas
function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Registrar a resposta selecionada
function respostaSelecionada(opcaoSelecionada) {

    if (opcaoSelecionada.afirmacao === "A") {
        respostasA++;
    } else {
        respostasB++;
    }

    atual++;

    mostraPergunta();
}

// Mostrar o resultado final
function mostraResultado() {

    caixaPerguntas.textContent = "Seu resultado é:";

    caixaAlternativas.textContent = "";

    caixaResultado.style.display = "block";

    if (respostasA > respostasB) {

        textoResultado.textContent =
            "Você é Aventureiro(a)! " +
            "Você gosta de novidades, desafios e experiências diferentes. " +
            "A rotina pode até ser confortável, mas você prefere quando existe algo novo para descobrir.";

    } else if (respostasB > respostasA) {

        textoResultado.textContent =
            "Você é Tranquilo(a)! " +
            "Você valoriza estabilidade, conforto e momentos de paz. " +
            "Prefere pensar antes de agir e gosta de aproveitar as coisas no seu próprio ritmo.";

    } else {

        textoResultado.textContent =
            "Você é um equilíbrio entre Aventureiro(a) e Tranquilo(a)! " +
            "Você gosta de novidades, mas também valoriza os momentos de paz e tranquilidade.";
    }

    // Criar o botão para jogar novamente
    const botaoNovamente = document.createElement("button");

    botaoNovamente.textContent = "Jogar novamente";

    botaoNovamente.addEventListener("click", iniciarJogo);

    caixaAlternativas.appendChild(botaoNovamente);
}

// Botão inicial
botaoJogar.addEventListener("click", iniciarJogo);
