function exibirTextoNaTela(tag, texto){
    let campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}

function buscarValorHTML(tag){
    return document.getElementById(tag).value;
}

function calculoIMC() 
{
    let peso = parseFloat(buscarValorHTML('peso').replace(',', '.'));
    let altura = parseFloat(buscarValorHTML('altura').replace(',', '.'));
    let imc = peso / (altura * altura);
    return imc;
}

function informarIMC(){
    let IMC = calculoIMC();
    let texto = IMC.toFixed(2);
    exibirTextoNaTela('resultado', texto);
}

exibirTextoNaTela('tituloPagina', 'Calculadora de IMC');

function limparCampos(){
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('menorPesoIdeal').innerHTML = '';
    document.getElementById('maiorPesoIdeal').innerHTML = '';

}

function menorPesoIdeal(){
    let altura = parseFloat(buscarValorHTML('altura').replace(',', '.'));
    let menorPeso = (18.5 * (altura * altura)).toFixed(1).replace('.', ',');
    exibirTextoNaTela('menorPesoIdeal', menorPeso);
}

function maiorPesoIdeal(){
    let altura = parseFloat(buscarValorHTML('altura').replace(',', '.'));
    let maiorPeso = (24.9 * (altura * altura)).toFixed(1).replace('.', ',');
    exibirTextoNaTela('maiorPesoIdeal', maiorPeso);
}