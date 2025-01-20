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
    let imc = (peso / (altura * altura)).toFixed(1).replace('.', ',');
    return imc;
}

function informarIMC(){
    let IMC = calculoIMC();
    exibirTextoNaTela('resultado', IMC);
}

exibirTextoNaTela('tituloPagina', 'Calculadora de IMC');

function limparCampos(){
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('menorPesoIdeal').innerHTML = '';
    document.getElementById('maiorPesoIdeal').innerHTML = '';
    removerDestaque();
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

function removerDestaque() {
    let linhas = document.querySelectorAll('tbody tr');
    linhas.forEach(linha => {
        linha.classList.remove('highlight');
    });
}

function destacarLinhaTabela() {
    removerDestaque();
    let resultadoImc = calculoIMC().replace(',', '.');
    let linhas = document.querySelectorAll('tbody tr');
    if (resultadoImc < 18.5) {
        linhas[0].classList.add('highlight');
    } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
        linhas[1].classList.add('highlight');
    } else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
        linhas[2].classList.add('highlight');
    } else if (resultadoImc >= 30 && resultadoImc <= 34.9) {
        linhas[3].classList.add('highlight');
    } else if (resultadoImc >= 35 && resultadoImc <= 39.9) {
        linhas[4].classList.add('highlight');
    } else {
        linhas[5].classList.add('highlight');
    }
}

exibirTextoNaTela('SelecionaImcDesejado', 'Deseja um IMC específico?');

function pesoIdealAtravesDoIMC() {
    let imcDesejado = parseFloat(buscarValorHTML('imcDesejado').replace(',', '.'));
    let alturaContainerImcDesejado = parseFloat(buscarValorHTML('alturaImcDesejado').replace(',', '.'));
    let pesoAtravesDoIMC = (imcDesejado * (alturaContainerImcDesejado * alturaContainerImcDesejado)).toFixed(1).replace('.', ',');
    exibirTextoNaTela('pesoPeloImcDesejado', pesoAtravesDoIMC);
}

function limparCamposPesoAtravesDoIMC() {
    document.getElementById('imcDesejado').value = '';
    document.getElementById('alturaImcDesejado').value = '';
    document.getElementById('pesoPeloImcDesejado').innerHTML = '';
}
