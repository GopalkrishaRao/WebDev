document.getElementsByClassName("btn")[0].addEventListener("click", convert);
let binaryInput = document.getElementById("binary").value;
// let binaryInput = "10101"

function convert(){
    let arrayBinary = binaryInput.split("");


    console.log(arrayBinary);
    console.log(binaryInput);


    let binaryCode = [];

    for(i=0; i<arrayBinary.length; i++){
        binaryCode.push(+arrayBinary[i])
    };

    binaryCode.reverse();
    let decimalNumber = 0;

    for (i=0; i<binaryCode.length; i++){
        decimalNumber = decimalNumber + (2**i)*binaryCode[i];
    };
    document.querySelectorAll(".result")[0].innerText= `Decimal Number : ${decimalNumber}`;

    
}; 