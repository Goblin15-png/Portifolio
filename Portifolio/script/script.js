const NOME = "Bernardo Diniz";

let tituloProfissional = "Desenvolvedor e Analista de Sistemas";

let minhaBio = "Sou estudante de Desenvolvimento de Sistemas e apaixonado por tecnologia, programação e resolução de problemas. Tenho experiência com Python, SQLite e criação de projetos focados em aprendizado prático, sempre buscando evoluir minhas habilidades em desenvolvimento de software. Gosto de transformar ideias em soluções funcionais, aprender novas tecnologias e enfrentar desafios que me façam crescer como desenvolvedor. Atualmente, estou focado em aprimorar meus conhecimentos em back-end, lógica de programação e desenvolvimento de aplicações.";

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

// DATA ATUAL
let dataAtual = new Date();
let mesAtual = dataAtual.getMonth() + 1;
let anoAtual = dataAtual.getFullYear();
let diaAtual = dataAtual.getDate();

let indefinido;
let nulo = null;

let curso = {
    nome: "Desenvolvedor de sistemas",
    semestre: 3,
    disciplinaAtual: "Aluno"
};

// TESTES
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

// MOSTRAR DADOS NA TELA
document.getElementById("meuNome").innerText = NOME;

document.getElementById("tituloProfissional").innerText =
tituloProfissional;

document.getElementById("minhaBio").innerText = minhaBio;

document.getElementById("anoIngresso").innerText =
"Ano de ingresso: " + anoIngresso;

document.getElementById("anoFormatura").innerText =
"Ano de formatura: " + anoFormatura;

// CÁLCULO DO TEMPO RESTANTE
let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

// TEXTO DOS ANOS
let textoAno = "";

if (anosRestantes === 1) {
    textoAno = "ano";
} else if (anosRestantes <= 0) {
    textoAno = "";
} else {
    textoAno = "anos";
}


// TEXTO DOS MESES
let textoMes = "";

if (mesesRestantes <= 0) {
    textoMes = "";
} else if (mesesRestantes === 1) {
    textoMes = "mês";
} else {
    textoMes = "meses";
}

// TEXTO DOS DIAS
let textoDia = "";

if (diasRestantes <= 0) {
    textoDia = "";
} else if (diasRestantes === 1) {
    textoDia = "dia";
} else {
    textoDia = "dias";
}

// MOSTRAR TEMPO RESTANTE
if (
    anosRestantes <= 0 &&
    mesesRestantes <= 0 &&
    diasRestantes <= 0
) {

    document.getElementById("tempoRestanteParaFormatura").innerText =
    "Curso Concluído!";

} else {

    let parts = [];
    if (anosRestantes > 0) parts.push(`${anosRestantes} ${textoAno}`);
    if (mesesRestantes > 0) parts.push(`${mesesRestantes} ${textoMes}`);
    if (diasRestantes > 0) parts.push(`${diasRestantes} ${textoDia}`);

    document.getElementById("tempoRestanteParaFormatura").innerText =
    `Tempo restante para formatura: ${parts.join(", ")}`;
}
