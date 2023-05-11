let text = document.getElementsByClassName('inptText')[0];
let clearBtn = document.getElementsByClassName('clear')[0];
let count = document.getElementsByClassName('count')[0];
let calculateBtn = document.getElementsByClassName('calculate')[0];


function wordCount() { 
    document.getElementsByClassName('wordcount')[0].style.display='block';
    document.getElementsByClassName('clickcalculate')[0].style.display='none';

    let valueString=text.value.trim()

    if(valueString == null || valueString =="" ){
        count.innerHTML="00"
    }

    else{
        count.innerHTML=valueString.split(" ").filter(element => element !== '').length
    }

    if(count.innerHTML>=1 && count.innerHTML <=9 && count.innerHTML!=0 ){
    count.innerHTML='0'+count.innerHTML;
            };
}

  calculateBtn.addEventListener('click', wordCount)

clearBtn.addEventListener('click', ()=>{
    count.innerHTML='00';
    text.value=''
    document.getElementsByClassName('wordcount')[0].style.display='none';
    document.getElementsByClassName('clickcalculate')[0].style.display='block';
})


  
