let calculate = "<button id='btn'>Calculate</button> <br><p>Your Age is :</p>";
document.querySelectorAll(".desc")[0].innerHTML=calculate

document.getElementById("btn").addEventListener("click", displayAge);
let dob = document.getElementById("dob").value;
// let dob = "2022-10-08"
console.log(typeof dob);

function displayAge(){
if(dob==""){
    alert("Please enter a date!")}
else{
    // getting dob in mm-dd-yyyy format
    // Month
    let month = [];
        for ( i=5; i<7; i++){
            month.push(dob[i])
        };
    let monthSting = month.join("");

    // Date
    let date = [];
        for ( i=8; i<10; i++){
            date.push(dob[i])
        };
    let dateSting = date.join("");

    // year
    let year = [];
        for ( i=0; i<4; i++){
            year.push(dob[i])
        };
    let yearSting = year.join("");

    let dobDate = new Date([Number(monthSting), Number(dateSting), Number(yearSting)].join("/"))

    let today = new Date([new Date().getMonth()+1, new Date().getDate(), new Date().getFullYear()].join("/"));
    
    let milisecoendsInDay =1000*60*60*24;
    let diff = (today.getTime()-dobDate.getTime())/(milisecoendsInDay);
    

    document.getElementById("days").innerText=diff
console.log(diff);
    };
};
