function exibirTextoNaTela(tag, texto){
    let campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}

function buscarValorHTML(tag){
    return document.getElementById(tag).value;
}

function calculoIMC() 
{
    let peso = buscarValorHTML('peso');
    let altura = buscarValorHTML('altura');
    let imc = peso / (altura * altura);
    return imc;
}

function informarIMC(){
    let IMC = calculoIMC();
    let texto = 'Seu IMC é: ' + IMC.toFixed(2);
    exibirTextoNaTela('resultado', texto);
}

exibirTextoNaTela('tituloPagina', 'Calculadora de IMC');

function limparCampos(){
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
}
