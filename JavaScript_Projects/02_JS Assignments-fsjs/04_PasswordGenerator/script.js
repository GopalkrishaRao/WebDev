const resultEl = document.getElementById('result');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard') ;


generateEl.addEventListener("click", gneratePassword)

function gneratePassword(){
      // required length of password
      let passwordLength = document.getElementById('length').value;


    // chech what charects must include in password
    let passwordIncluedes=[];
 

    if(uppercaseEl.checked==true){
        passwordIncluedes.push(0)
    };
    if(lowercaseEl.checked==true){
        passwordIncluedes.push(1)
    };
    if(numbersEl.checked==true){
        passwordIncluedes.push(2)
    };
    if(symbolsEl.checked==true){
        passwordIncluedes.push(3)
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
    for(i=0; i<passwordLength; i++){

        let x;
        x=Math.floor(Math.random()*passwordIncluedes.length)
        console.log(x);

        if(passwordIncluedes[x]==0){
            password.push(upper())
        }
        else if (passwordIncluedes[x]==1){
            password.push(lower())
        }
        else if (passwordIncluedes[x]==2){
            password.push(num())
        }
        else if(passwordIncluedes[x]==3){
            password.push(symbol())  
        }
        else{
            alert ("Please check atlist one type")
            lowercaseEl==checked
        }

    };
    resultEl.innerText=password.join("")
};



const copyText = ()=>{
  // Create a range object
  var range = document.createRange();
  range.selectNode(resultEl);

  // Select the text within the range
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  // Copy the selected text to the clipboard
  document.execCommand("copy");

    // Clear the selection
    window.getSelection().removeAllRanges();
}

// copy password
clipboardEl.addEventListener('click', copyText);

document.body.style.color="#1f1f1f"