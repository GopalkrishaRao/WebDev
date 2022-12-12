let add = document.getElementsByClassName("addButton")[0];
let input = document.getElementsByClassName("input")[0];
let todoList=document.getElementsByClassName("container")[0];
todoList.style.background="pink";
todoList.style.fontSize="35px";
let newLi = document.createElement("li");
add.addEventListener("click", addList);

function addList(){
    if(input.value==""){
        alert("Please add note")
    }
    else{
        todoList.appendChild(newLi)
    }
};