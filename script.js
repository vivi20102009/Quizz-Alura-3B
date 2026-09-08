const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

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

function respostaSelecionada(opcaoSelecionada) {

    if (opcaoSelecionada.afirmacao === "A") {

        respostasA++;

    } else {

        respostasB++;

    }

    atual++;

    mostraPergunta();
}

function mostraResultado() {

    caixaPerguntas.textContent = "Seu resultado é:";

    caixaAlternativas.textContent = "";

    if (respostasA > respostasB) {

        textoResultado.textContent =
            "Você é Aventureiro(a)! " +
            "Você gosta de novidades, desafios e experiências diferentes. " +
            "A rotina pode até ser confortável, mas você prefere quando existe algo novo para descobrir.";

    } else {

        textoResultado.textContent =
            "Você é Tranquilo(a)! " +
            "Você valoriza estabilidade, conforto e momentos de paz. " +
            "Prefere pensar antes de agir e gosta de aproveitar as coisas no seu próprio ritmo.";
    }
}

mostraPergunta();
