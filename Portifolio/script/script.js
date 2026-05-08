const dados = {
    nome: "Bernardo Diniz",

    titulo: "Desenvolvedor e Analista de Sistemas",

    bio: `Sou estudante de Desenvolvimento de Sistemas e apaixonado por tecnologia, programação e resolução de problemas.

Tenho experiência com Python, SQLite e criação de projetos focados em aprendizado prático, sempre buscando evoluir minhas habilidades em desenvolvimento de software.

Atualmente, estou focado em aprimorar meus conhecimentos em back-end, lógica de programação e desenvolvimento de aplicações.`,

    curso: {
        nome: "Desenvolvimento de Sistemas",
        semestre: 3
    },

    ingresso: 2025,

    formatura: new Date(2026, 11, 31)
};


// ATALHO PARA PEGAR ELEMENTOS
const elemento = (id) => document.getElementById(id);


// CARREGAR DADOS
function carregarDados() {
    elemento("meuNome").textContent = dados.nome;
    elemento("tituloProfissional").textContent = dados.titulo;
    elemento("minhaBio").textContent = dados.bio;

    elemento("anoIngresso").textContent =
        `Ano de ingresso: ${dados.ingresso}`;

    elemento("anoFormatura").textContent =
        `Ano de formatura: ${dados.formatura.getFullYear()}`;

    elemento("curso").textContent =
        `Curso: ${dados.curso.nome}`;
}


// CALCULAR TEMPO RESTANTE
function calcularTempoRestante() {
    const hoje = new Date();
    const diferenca = dados.formatura - hoje;

    if (diferenca <= 0) {
        elemento("tempoRestanteParaFormatura").textContent =
            "Curso concluído!";
        return;
    }

    const diasTotais = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const anos = Math.floor(diasTotais / 365);
    const meses = Math.floor((diasTotais % 365) / 30);
    const dias = (diasTotais % 365) % 30;

    const partes = [];

    if (anos > 0) {
        partes.push(`${anos} ${anos === 1 ? "ano" : "anos"}`);
    }

    if (meses > 0) {
        partes.push(`${meses} ${meses === 1 ? "mês" : "meses"}`);
    }

    if (dias > 0) {
        partes.push(`${dias} ${dias === 1 ? "dia" : "dias"}`);
    }

    elemento("tempoRestanteParaFormatura").textContent =
        `Tempo restante para formatura: ${partes.join(", ")}`;
}


// INICIALIZAÇÃO
carregarDados();
calcularTempoRestante();