
let btn = document.querySelectorAll("#button")[0]
btn.style.cursor="pointer"
btn.addEventListener("click", bgc);

function bgc(){
    document.getElementById("canvas").style.background=randmcolor();
};


let randmcolor= function hexcodeGen(){
    let hex = "0123456789abcdefgh";
    let co = "#";
for (let i=0; i<6; i++){
    co =co + hex[Math.floor(Math.random()*16)]
}
return co

};






