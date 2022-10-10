const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard') 

let lengthofPassword = document.getElementById('length').value;



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    
})

generateEl.addEventListener('click', () => {
    
})

function generatePassword(lower, upper, number, symbol, length) {
    
}

let alphabet = "abcdefghijklmnopqrstuvwxyz"
function getRandomLower() {
    return alphabet[Math.floor(Math.random()*alphabet.length)];
}

function getRandomUpper() {
    let x = alphabet[Math.floor(Math.random()*alphabet.length)];
    return x.toUpperCase();
}

function getRandomNumber() {
    return Math.floor(Math.random()*10)
}

let symbols = "!@#$%&*_+-=<>?"
function getRandomSymbol() {
    return symbols[Math.floor(Math.random()*symbols.length)]
}


document.body.style.color="#1f1f1f"