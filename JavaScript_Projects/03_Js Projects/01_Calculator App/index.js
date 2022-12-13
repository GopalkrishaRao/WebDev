let display= document.getElementById('display');
let buttons = document.getElementsByClassName('button');

buttons.map(button => {
    button.addEventListner('click', (e)=>{
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    });
});