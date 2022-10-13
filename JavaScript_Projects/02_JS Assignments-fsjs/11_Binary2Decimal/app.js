
let binayInput = document.getElementById("binary").value;

// document.querySelectorAll(".btn")[0].addEventListener("click", convert)

function convert(){
    let arrayBinayr = binayInput.split("");
    let binaryCode = [];
    for(i=0; i<arrayBinayr.length; i++){
        binaryCode.push(+arrayBinayr[i])
    }

    binaryCode.reverse();
    let decimalNumber = 0;

    for (i=0; i<binaryCode.length; i++){
        decimalNumber = decimalNumber + (2**i)*binaryCode[i];
    };
   
    document.querySelectorAll(".result")[0].innerText= `Decimal Number : ${decimalNumber}`

};





