let IMC = consultarIMC();

function buscarParametroHTML(tag){
    document.getElementById(tag).value;
}

function consultarIMC(parametroPeso, parametroAltura) 
{
    let peso = buscarParametroHTML('peso');
    let altura = buscarParametroHTML('altura');
    let imc = parametroPeso / (parametroAltura * parametroAltura);
    return imc;
}

function exibirTextoNaTela(tag, texto){
    let campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}

exibirTextoNaTela('tituloPagina', 'Calculadora de IMC');
exibirTextoNaTela('resposta', 'IMC: ' + IMC);