# Projeto de Estudo - Jogo do Número Secreto

Este projeto é um jogo interativo desenvolvido em **HTML**, **CSS** e **JavaScript**, no qual o jogador deve adivinhar um número secreto gerado aleatoriamente. Ele explora conceitos de manipulação de DOM, lógica de programação e design responsivo.

---

## Funcionalidades Principais

1. **Gerar um Número Secreto:**
   - O sistema gera aleatoriamente um número secreto entre 1 e 100 ao iniciar o jogo.

2. **Entrada e Verificação do Número:**
   - O jogador insere um número no campo de entrada e recebe feedback se o número é maior, menor ou igual ao número secreto.

3. **Controle de Tentativas:**
   - O sistema rastreia o número de tentativas realizadas e apresenta esta informação ao jogador.

4. **Reiniciar o Jogo:**
   - O jogador pode reiniciar o jogo clicando no botão "Novo Jogo", que redefine o número secreto e o contador de tentativas.

5. **Design Responsivo:**
   - Interface ajustável para diferentes tamanhos de tela, garantindo boa experiência de uso em dispositivos móveis.

---

## Estrutura do Código

### Arquivos e Suas Responsabilidades

- **`index.html`**
    - Estrutura do jogo, incluindo os campos de entrada, botões e mensagens de feedback.

- **`style.css`**
    - Estilos gerais do jogo, como cores, fontes e layout.
    - Inclui um design responsivo para dispositivos móveis.

- **`media-760.css`**
    - Estilos específicos para telas com largura de até 760px.

- **`app.js`**
    - Lógica principal do jogo, incluindo:
        - Geração do número secreto.
        - Verificação do número inserido.
        - Atualização dinâmica das mensagens exibidas ao jogador.
        - Reinicialização do jogo.

---

## Como Executar o Projeto

1. **Clone o repositório.**

2. **Abra o arquivo `index.html` no navegador.**

3. **Jogue o jogo.**
   - Insira um número no campo de entrada.
   - Clique no botão "Chutar" para verificar se acertou.
   - Reinicie o jogo clicando no botão "Novo Jogo" sempre que desejar.

---

## Tecnologias Utilizadas

- **HTML5:** Estruturação do conteúdo do jogo.
- **CSS3:** Estilização e design responsivo.
- **JavaScript (ES6):** Lógica do jogo e manipulação do DOM.

---

## Autor

Lucas Degrande