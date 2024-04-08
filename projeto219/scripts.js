let primeiroNumero = Math.floor(Math.random()*6)+1
let primeiraImagem = `imagens/dice${primeiroNumero}.png`
let img1 = document.querySelectorAll('img')[0]
img1.setAttribute('src', primeiraImagem)


let segundoNumero = Math.floor(Math.random()*6)+1
let segundaImagem = `imagens/dice${segundoNumero}.png`
let img2 = document.querySelectorAll('img')[1]
img2.setAttribute('src', segundaImagem)

const h1 = document.querySelector('h1')
if (primeiroNumero > segundoNumero) {
    h1.innerText = 'Player 1 venceu! '
}
else if (segundoNumero > primeiroNumero) {
    h1.innerText = 'Player 2 venceu'
}
else {
    h1.innerText = 'Deu empate!'
}