
let buttonClick = document.querySelectorAll("#button")[0]
buttonClick.style.cursor="pointer"
buttonClick.addEventListener("click", bgc);

buttonClick.addEventListener("mouseout", ori);
function ori(){
    document.getElementById("canvas").style.background="#fff"  
    document.getElementById("canvas").style.color="#1f1f1f"
    document.getElementById("canvas").style.border="2px solid #1f1f1f"
}
function bgc(){
    document.getElementById("canvas").style.background=av();
};


let av= function hexcodeGen(){
    let hex = "0123456789abcdefgh";
    let co = "#";
for (let i=0; i<6; i++){
    co =co + hex[Math.floor(Math.random()*16)]
}
return co

};






