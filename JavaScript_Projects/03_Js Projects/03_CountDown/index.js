let getMin = document.getElementsByClassName('min')[0];
let getSec = document.getElementsByClassName('seconds')[0];
let btnStart = document.getElementsByClassName('btn-start')[0];
let btnSetTime = document.getElementsByClassName('btn-set')[0];
let timeIntervel 



btnStart.addEventListener('click', ()=>{
    if(btnStart.innerHTML=='Start'|| btnStart.innerHTML=='Resume' ){
        timeIntervel= setInterval(startCountdown, 1000)
        btnStart.innerHTML='Puase'
    }
    else if( btnStart.innerHTML=='Puase'){
        clearInterval(timeIntervel);
        btnStart.innerHTML='Resume'
    }

})

let startCountdown = ()=>{

    if(getMin.innerHTML==0 && getSec.innerHTML==0){
        clearInterval(timeIntervel);
        document.querySelector('.head').innerHTML='Time Out !!'
       }
    else{
        getSec.innerHTML--
        if(getSec.innerHTML==-1){
            getMin.innerHTML--
            if(getMin.innerHTML<=9){
                getMin.innerHTML='0'+getMin.innerHTML
            }
            getSec.innerHTML=59
        }
        if(getSec.innerHTML<=9){
            getSec.innerHTML='0'+getSec.innerHTML
        }
    }
};


let setTime = ()=>{
    getMin.innerHTML= prompt("Minutes", '0'+01);
    getSec.innerHTML=prompt("Seconed", '0'+ 0);
    btnSetTime.innerHTML = 'Reset Time'
    if(getMin.innerHTML==''|| getSec.innerHTML==''){
        alert("Pease Give input")
        getMin.innerHTML= prompt("Minutes", '0'+01);
        getSec.innerHTML=prompt("Seconed", '0'+ 0);
    }
}

btnSetTime.addEventListener('click', setTime);