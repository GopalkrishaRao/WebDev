let dob=document.getElementById('dob');
let year= document.getElementById('years');
let month= document.getElementById('months');
let day = document.getElementById('days');
let today =new Date()
function calculateAge(){
    year.innerHTML=(today.getFullYear())-(new Date(dob.value).getFullYear())
    month.innerHTML=(today.getMonth())-((new Date(dob.value).getMonth()))
    day.innerHTML=(today.getDate())-((new Date(dob.value).getDate()))
    
    
}