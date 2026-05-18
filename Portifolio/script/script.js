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

let projetos = [];

// CRIAR PROJETOS
function criarProjetos() {
    adicionarProjeto(
        "Aplicação de Estacionamento",
        "Aplicação desktop para gerenciamento de estacionamento, com registro/ cadastro de clientes e carros.",
        ["Python", "TKinter", "fpdf"],
        "VsCode, GitHub, pip, PyInstaller"
    );

    adicionarProjeto(
        "Aplicação de Biblioteca",
        "Aplicação desktop para gerenciamento de livros, com registro/cadastro de clientes e livros, alem de administração de status dos livros.",
        ["Python", "TKinter", "fpdf"],
        "VsCode, GitHub, pip, PyInstaller"
    );

    adicionarProjeto(
        "Sistema de Controle de Estoque",
        "Sistema para controlar estoque de produtos, com funcionalidades de adicionar, editar e remover itens.",
        ["Python", "SQLite", "Tkinter"],
        "Banco de dados, CRUD, Interface gráfica"
    );

    adicionarProjeto(
        "Calculadora Científica",
        "Calculadora web com operações básicas e avançadas, como seno, cosseno e logaritmos.",
        ["JavaScript", "HTML", "CSS"],
        "DOM manipulation, Math functions"
    );
}

// RENDERIZAR PROJETOS NA PÁGINA
function renderizarProjetos(lista = projetos) {
    const container = elemento("Projetos");
    if (!container) return;
    
    container.innerHTML = "";
    
    if (lista.length === 0) {
        container.innerHTML = "<p style='grid-column: 1 / -1; text-align: center; color: #999;'>Nenhum projeto encontrado</p>";
        return;
    }
    
    lista.forEach(projeto => {
        const divProjeto = document.createElement("div");
        divProjeto.className = "projeto";
        
        const tecnologiasHTML = projeto.Tecnologias
            .map(tech => `<span class="tag-tech">${tech}</span>`)
            .join("");
        
        divProjeto.innerHTML = `
            <h3>${projeto.Nome}</h3>
            <p><strong>Descrição:</strong> ${projeto.Descricao}</p>
            <p><strong>Tecnologias:</strong></p>
            <div class="tecnologias">${tecnologiasHTML}</div>
            <p><strong>Conhecimentos:</strong> ${projeto.Conhecimentos}</p>
        `;
        
        container.appendChild(divProjeto);
    });
}

// ADICIONAR NOVO PROJETO
function adicionarProjeto(nome, descricao, tecnologias, conhecimentos) {
    projetos.push({
        Nome: nome,
        Descricao: descricao,
        Tecnologias: Array.isArray(tecnologias) ? tecnologias : tecnologias.split(",").map(t => t.trim()),
        Conhecimentos: conhecimentos
    });
    renderizarProjetos();
}

// FILTRAR/PESQUISAR PROJETOS
function pesquisarProjetos(termo) {
    const termoLower = termo.toLowerCase();
    const projetosFiltrados = projetos.filter(projeto => 
        projeto.Nome.toLowerCase().includes(termoLower) ||
        projeto.Descricao.toLowerCase().includes(termoLower) ||
        projeto.Tecnologias.some(tech => tech.toLowerCase().includes(termoLower))
    );
    renderizarProjetos(projetosFiltrados);
}

// INICIALIZAR PÁGINA DE PROJETOS
function inicializarProjetos() {
    renderizarProjetos();
    
    const inputPesquisa = document.querySelector(".pesquisa input");
    if (inputPesquisa) {
        inputPesquisa.addEventListener("input", (e) => {
            pesquisarProjetos(e.target.value);
        });
    }
}

// CHAMAR AO CARREGAR A PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    carregarDados();
    calcularTempoRestante();
    criarProjetos();
    if (elemento("Projetos")) inicializarProjetos();
});