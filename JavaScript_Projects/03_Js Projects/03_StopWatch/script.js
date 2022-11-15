let start = document.getElementById("start");
let reset = document.getElementById("reset");
let h1Tag = document.getElementById("time")
let spanInnerHtml =
`<span id="hr">00</span>: 
<span id="min">00</span>: 
<span id="sec">00</span>`;

let hour = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


let second=00


function tStart(){
    if(start.innerText=="Start" || start.innerText =="Resume" ){
    start.innerText="Pause";
    }
    else{
        start.innerText="Resume";
    };

        setInterval(timeStart, 1000)
        function timeStart(){
            second= second + 1;
            sec.innerText=second
        }

}

function tReset(){
    start.innerText="Start"
    document.getElementById("time").innerHTML=spanInnerHtml
};
