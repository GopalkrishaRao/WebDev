let check = document.getElementsByClassName('checkbox')[0];
let task = document.getElementsByClassName('todo_details')[0];
let starBtn = document.getElementsByClassName('star')[0];
let editBtn = document.getElementsByClassName('edit')[0];
let deleteBtn = document.getElementsByClassName('delete')[0];



let strike = ()=>{
    if(check.checked){
        task.innerHTML=`<s>${task.innerHTML}</s>`
    }
    // else if (!check.checked){
        //     task.innerHTML=task.innerText
        // }
    else {
         task.innerHTML=task.innerText
        }
}

let starTask = ()=>{
    console.log("importent");
}

let deleteTask = ()=>{
    console.log("delete");
}

let editTask = ()=>{
    if(editBtn.innerHTML=='Edit'){
        editBtn.innerHTML='Save'
    }
    else {
        editBtn.innerHTML='Edit'
    }
    console.log('edit task');
}