const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard') ;

generateEl.addEventListener("click", gneratePassword)

function gneratePassword(){
    // chech what charects must include in password
    let passwordIncluedes=[];

    if(uppercaseEl.checked==true){
        passwordIncluedes.push("upperCase")
    };
    if(lowercaseEl.checked==true){
        passwordIncluedes.push("lowerCase")
    };
    if(numbersEl.checked==true){
        passwordIncluedes.push("number")
    };
    if(symbolsEl.checked==true){
        passwordIncluedes.push("symbols")
    };

    // required length of password
    let passwordLength = document.getElementById('length').value;
    
    let random = []
    for(i=0; i<passwordLength; i++){
    random.push(Math.floor(Math.random()*passwordIncluedes.length));
    };

    // functions to generate number, upper and lowercase and symbols

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


    // Password generation
    let password = []
    for(i=0; i<random.length; i++){
        if(random[i]==0){
            password.push(upper())
        }
        else if (random[i]==1){
            password.push(lower())
        }
        else if (random[i]==2){
            password.push(num())
        }
        else{
            password.push(symbol())  
        }
    };
    resultEl.innerText=password.join("")
}



document.body.style.color="#1f1f1f"