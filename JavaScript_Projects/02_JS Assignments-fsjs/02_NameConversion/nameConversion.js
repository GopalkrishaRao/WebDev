let inputText = document.getElementById("text");
let camelCase = document.getElementById("camel-case");
let pascalCase = document.getElementById("pascal-case");
let snakeCase = document.getElementById("snake-case")
let screamingSnakeCase = document.getElementById("screaming-snake-case");
let kababCase = document.getElementById("kebab-case")
let screamingKababCase = document.getElementById("screaming-kebab-case");


document.getElementById("convert-btn").onclick = converter;


function converter(){

// camel case converson
let camelCaseText=inputText.value.toLowerCase();

for(i=0; i<camelCaseText.length; i++){
    if(camelCaseText[camelCaseText.length-1]==" "){
        break
    }
    else if(camelCaseText[i]==" "){
         camelCaseText=camelCaseText.replace(" ", camelCaseText[i+1].toUpperCase())
         camelCaseText=camelCaseText.replace(camelCaseText[i+1], "")
    };
};
camelCase.innerText=camelCaseText;

// Pascal case conversion
let pascalCaseText=inputText.value.toLowerCase();


for(i=0; i<pascalCaseText.length; i++){
    if(pascalCaseText[pascalCaseText.length-1]==" "){
        break
    }
    else if (pascalCaseText[i]==pascalCaseText[0]){
        pascalCaseText=pascalCaseText.replace(pascalCaseText[0], pascalCaseText[0].toUpperCase()) 
     }
    else if(pascalCaseText[i]==" "){
         pascalCaseText=pascalCaseText.replace(" ", pascalCaseText[i+1].toUpperCase())
         pascalCaseText=pascalCaseText.replace(pascalCaseText[i+1], "")
    };
};


pascalCase.innerText=pascalCaseText;

// snake case conversion
let snakeCaseText=inputText.value;
for(i=0; i<snakeCaseText.length; i++){
    if(snakeCaseText[i]==" "){
        snakeCaseText=snakeCaseText.replace(" ", "_")
    }
}
snakeCase.innerText=snakeCaseText.toLowerCase();

// Screaming Snake Case:
screamingSnakeCase.innerText=snakeCaseText.toUpperCase()

// Kabak Case
let kababCaseText = inputText.value;

for(i=0; i<kababCaseText.length; i++){
    if(kababCaseText[i]==" "){
        kababCaseText=kababCaseText.replace(" ", "-")
    };
};
kababCase.innerText=kababCaseText.toLowerCase();
// screamingKababCase
screamingKababCase.innerText=kababCaseText.toUpperCase();
};


