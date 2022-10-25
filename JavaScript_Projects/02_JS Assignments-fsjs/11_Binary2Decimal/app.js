document.querySelector(".btn").addEventListener("submit", convert);
let binaryInput = document.getElementById("binary").value;




function convert(){
    // document.querySelector(".btn").addEventListener("click",function (pd){
    //     pd.preventDefault();
    // });
 

    
    let arrayBinary = binaryInput.split("");
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
convert()