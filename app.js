function exibirTextoNaTela(tag, texto){
    let campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}

function exibirTextoTelaInicial() {
    exibirTextoNaTela('tituloPagina', 'Calculadora de IMC');
    exibirTextoNaTela('descricao', 'Adivinhe o número secreto entre 1 e ' + numeroMaximo);
}

exibirTextoTelaInicial();