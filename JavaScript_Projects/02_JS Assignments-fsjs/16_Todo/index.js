let add = document.getElementsByClassName("addButton")[0];
let input = document.getElementsByClassName("input")[0];
let todoList=document.getElementsByClassName("container")[0];
add.addEventListener("click", addList);

function addList(){
    if(input.value==""){
        alert("Please add note")
    }

}