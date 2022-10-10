// const container;
// const error;

// function getAge(){
    
    
// }

// function calcAge(){ 
    
// }

// function displayAge(){
    
    
// }


let dob = document.getElementById("dob").value;
let date2 = new Date();
let diffTime = Math.abs(date2 - dob);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");

