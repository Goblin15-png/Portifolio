const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

botao.addEventListener("click", function() {
    let claro = true;
    if (claro) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Claro";
        claro = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Escuro";
        claro = false;
    }
    claro = !claro;
}
);