let min =00;
let seconds = 00;


let getMin = document.querySelector('.min');
let getSeconds = document.querySelector('.seconds');
let btnStart  = document.querySelector('.btn-start');
let btnReset  = document.querySelector('.btn-reset');

let interval
btnStart.addEventListener('click', ()=>{
    if(btnStart.innerHTML=='Start' || btnStart.innerHTML=='Resume'){
        interval = setInterval(startTimer, 1000)
        btnStart.innerHTML='Puase'
    }
    else{
        clearInterval(interval);
        btnStart.innerHTML='Resume'
    }
 })

function startTimer(){
    seconds++;
    if(seconds<=9){
        getSeconds.innerHTML='0'+ seconds;
    }
    else if(seconds >9 && seconds<60){
        getSeconds.innerHTML= seconds;
    }
    else if(seconds == 60){
        min= min+1;
        getMin.innerHTML='0'+ min;
        seconds=0;
        getSeconds.innerHTML='0'+ 0;
    }
}


btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    seconds = '00';
    min = '00';
    getMin.innerHTML=min;
    getSeconds.innerHTML=seconds;
    btnStart.innerHTML='Start'
   })