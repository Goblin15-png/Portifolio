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
    if (elemento("meuNome")) elemento("meuNome").textContent = dados.nome;
    if (elemento("tituloProfissional")) elemento("tituloProfissional").textContent = dados.titulo;
    if (elemento("minhaBio")) elemento("minhaBio").textContent = dados.bio;

    if (elemento("anoIngresso")) elemento("anoIngresso").textContent =
        `Ano de ingresso: ${dados.ingresso}`;

    if (elemento("anoFormatura")) elemento("anoFormatura").textContent =
        `Ano de formatura: ${dados.formatura.getFullYear()}`;

    if (elemento("curso")) elemento("curso").textContent =
        `Curso: ${dados.curso.nome}`;
}


// CALCULAR TEMPO RESTANTE
function calcularTempoRestante() {
    if (!elemento("tempoRestanteParaFormatura")) return;
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

let projetos = [
    {Nome : "Aplicação de Estacionamento",
     Tecnologias : ["Python","TKinter","fpdf"],
     Conhecimentos : "VsCode, GitHub, pip, PyInstaller",
     Descricao : "Aplicação desktop para gerenciamento de estacionamento, com registro/ cadastro de clientes e carros."
    },
    {Nome : "Aplicação de Biblioteca",
     Tecnologias : ["Python","TKinter","fpdf"],
     Conhecimentos : "VsCode, GitHub, pip, PyInstaller",
     Descricao : "Aplicação desktop para gerenciamento de livros, com registro/cadastro de clientes e livros, alem de administração de status dos livros."
    },
    {Nome : "Sistema de Controle de Estoque",
     Tecnologias : ["Python","SQLite","Tkinter"],
     Conhecimentos : "Banco de dados, CRUD, Interface gráfica",
     Descricao : "Sistema para controlar estoque de produtos, com funcionalidades de adicionar, editar e remover itens."
    },
    {Nome : "Calculadora Científica",
     Tecnologias : ["JavaScript","HTML","CSS"],
     Conhecimentos : "DOM manipulation, Math functions",
     Descricao : "Calculadora web com operações básicas e avançadas, como seno, cosseno e logaritmos."
    }
]

function carregarProjetos(filtro = "") {
    const container = document.getElementById("Projetos");
    if (container) {
        container.innerHTML = "";
        const projetosFiltrados = projetos.filter(projeto =>
            projeto.Nome.toLowerCase().includes(filtro.toLowerCase()) ||
            projeto.Tecnologias.some(tech => tech.toLowerCase().includes(filtro.toLowerCase())) ||
            projeto.Descricao.toLowerCase().includes(filtro.toLowerCase())
        );
        projetosFiltrados.forEach(projeto => {
            const div = document.createElement("div");
            div.className = "projeto";
            div.innerHTML = `
                <h3>${projeto.Nome}</h3>
                <p><strong>Tecnologias:</strong> ${projeto.Tecnologias.join(", ")}</p>
                <p><strong>Conhecimentos:</strong> ${projeto.Conhecimentos}</p>
                <p>${projeto.Descricao}</p>
            `;
            container.appendChild(div);
        });
    }
}

function pesquisarProjetos() {
    const input = document.querySelector(".pesquisa input");
    const filtro = input.value;
    carregarProjetos(filtro);
}

// INICIALIZAÇÃO
carregarDados();
calcularTempoRestante();
carregarProjetos();

// Adicionar evento de busca
document.addEventListener("DOMContentLoaded", () => {
    const botaoPesquisa = document.querySelector(".pesquisa button");
    const inputPesquisa = document.querySelector(".pesquisa input");
    if (botaoPesquisa) {
        botaoPesquisa.addEventListener("click", pesquisarProjetos);
    }
    if (inputPesquisa) {
        inputPesquisa.addEventListener("input", pesquisarProjetos);
    }
});