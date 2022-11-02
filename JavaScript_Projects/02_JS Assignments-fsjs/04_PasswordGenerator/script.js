// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard') ;

let passwordType=[];
let password = []; 

let passwordLength = document.getElementById('length').value;

for(i=0; i<passwordLength; i++){
   console.log( Math.floor(Math.random()*passwordType.length));
};



let num = ()=>{
    return Math.floor(Math.random()*10)
};

let symbol = ()=>{
    let symbols = "!@#$%^&*_-+=/"
    return symbols[Math.floor(Math.random()*symbols.length)]
};

let upper = ()=>{
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random()*alphabet.length)].toUpperCase()
};

let lower = ()=>{return upper().toLocaleLowerCase()};


// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// }

// clipboardEl.addEventListener('click', () => {
    
// })

// generateEl.addEventListener('click', () => {
    
// })

// function generatePassword(lower, upper, number, symbol, length) {
    
// }


// document.body.style.color="#1f1f1f"