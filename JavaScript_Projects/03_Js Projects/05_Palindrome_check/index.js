document.getElementById("checkbtn").addEventListener("click", check)

function check(){
let inputString = document.getElementById("input_area").value;
let reverseSting = inputString.split("").reverse().join("");

if(inputString== ""){
    alert("Please enter a value")
}
else if(inputString==reverseSting){
    document.getElementById("result").innerText= `${inputString} is a Palindrome !!`
}
else{
    document.getElementById("result").innerText= `${inputString} is not a Palindrome !!`
};
}
