const paginaInicial = document.querySelector(".pagina-inicial");
const paginaQuiz = document.querySelector(".pagina-quiz");

const botaoComecar = document.querySelector("#botao-comecar");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");
const nomeJogador = document.querySelector(".nome-jogador");
const progresso = document.querySelector(".progresso");

// Lista de nomes
const nomes = [
    "Gabriel",
    "Ana",
    "Pedro",
    "Mariana",
    "Lucas",
    "Julia",
    "Rafael",
    "Beatriz",
    "Matheus",
    "Larissa",
    "Felipe",
    "Camila",
    "Gustavo",
    "Isabela",
    "Miguel",
    "Sofia",
    "Arthur",
    "Helena",
    "Enzo",
    "Laura"
];

// Perguntas do quiz
const perguntas = [
    {
        enunciado: "você prefere seu fim de semana ideal como?",
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
        enunciado: "quando surge um problema, o que você faz?",
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
        enunciado: "em uma viagem, o que você prefere?",
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
        enunciado: "como seus amigos provavelmente descreveriam você?",
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

let nomeAtual = "";

// Sortear um nome aleatório
function sortearNome() {
    const indice = Math.floor(Math.random() * nomes.length);
    return nomes[indice];
}

// Iniciar o quiz
function iniciarJogo() {

    nomeAtual = sortearNome();

    atual = 0;
    respostasA = 0;
    respostasB = 0;

    // Esconder a página inicial e mostrar o quiz
    paginaInicial.style.display = "none";
    paginaQuiz.style.display = "block";

    // Mostrar o nome sorteado
    nomeJogador.textContent = "Jogador(a): " + nomeAtual;

    // Limpar o resultado anterior
    textoResultado.textContent = "";
    caixaResultado.style.display = "none";

    mostraPergunta();
}

// Mostrar a pergunta atual
function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    // Adicionar o nome no começo de cada pergunta
    caixaPerguntas.textContent =
        nomeAtual + ", " + perguntaAtual.enunciado;

    // Mostrar o progresso
    progresso.textContent =
        "Pergunta " + (atual + 1) + " de " + perguntas.length;

    // Limpar as alternativas anteriores
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

// Criar os botões de resposta
function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", function() {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    }
}

// Registrar a resposta
function respostaSelecionada(opcaoSelecionada) {

    if (opcaoSelecionada.afirmacao === "A") {
        respostasA++;
    } else {
        respostasB++;
    }

    atual++;

    mostraPergunta();
}

// Mostrar o resultado
function mostraResultado() {

    caixaPerguntas.textContent = nomeAtual + ", seu resultado é!";

    progresso.textContent = "Quiz concluído!";

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

    // Botão para jogar novamente
    const botaoNovamente = document.createElement("button");

    botaoNovamente.textContent = "Jogar novamente";

    botaoNovamente.classList.add("botao-novamente");

    botaoNovamente.addEventListener("click", voltarInicio);

    caixaAlternativas.appendChild(botaoNovamente);
}

// Voltar à página inicial
function voltarInicio() {

    paginaQuiz.style.display = "none";
    paginaInicial.style.display = "block";

    caixaPerguntas.textContent = "";
    caixaAlternativas.textContent = "";

    nomeJogador.textContent = "";
    progresso.textContent = "";

    textoResultado.textContent = "";
    caixaResultado.style.display = "none";

    atual = 0;
    respostasA = 0;
    respostasB = 0;
}

// Botão Começar
botaoComecar.addEventListener("click", iniciarJogo);
