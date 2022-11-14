let text= document.getElementById("text")
let sec = document.getElementsByClassName("seconeds")[0];
let min = document.getElementsByClassName("minutes")[0];
let hour = document.getElementsByClassName("hours")[0];

sec.value = 00;
min.value=00;
hour.value = 00;


text.onclick = checkInput;

function checkInput(){
    setInterval(checkInputBox, 2000)

    function checkInputBox(){
        if(sec.value==00 && min.value ==00 && hour.value == 00 && text.value !== ""){

            timerStart()
        }
    }
} 

function timerStart(){

    // if (sec.value==0 && min.value ==0 && hour.value == 00 && text.value !== ""){
        setInterval(startTime, 1000)
    // };
   
    function startTime(){
        if(sec.value<59){
        sec.value=sec.value + 1
        sec.innerHTML=sec.value
        }

        else if (min.value<59){
            sec.value=00;
            sec.innerHTML=sec.value

            min.value=min.value + 1
            min.innerHTML=min.value
        }

        else{
            sec.value=00;
            sec.innerHTML=sec.value;

            min.value=00
            min.innerHTML=min.value;

            hour.value= hour.value + 1;
            hour.innerHTML = hour.value;
        }
    }
}


