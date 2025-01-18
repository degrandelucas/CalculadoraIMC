let IMC = consultarIMC();

function buscarValorHTML(tag){
    document.getElementById(tag).value;
}

function consultarIMC() 
{
    let peso = buscarValorHTML('peso');
    let altura = buscarValorHTML('altura');
    let imc = peso / (altura * altura);
    return imc;
}

function exibirTextoNaTela(tag, texto){
    let campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}

exibirTextoNaTela('tituloPagina', 'Calculadora de IMC');
exibirTextoNaTela('resposta', 'IMC: ' + IMC);