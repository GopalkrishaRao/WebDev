let check = document.getElementsByClassName('checkbox')[0];
let task = document.getElementsByClassName('todo_details')[0];
let starBtn = document.getElementsByClassName('star')[0];
let editBtn = document.getElementsByClassName('edit')[0];
let deleteBtn = document.getElementsByClassName('delete')[0];
let addBtn = document.getElementsByClassName('add')[0];
let addToDo = document.getElementsByClassName('myInput')[0];
let newChild 

let addTask = () =>{
    let createOl =document.createElement('ol');
    createOl.innerHTML=
    `
    <div class="todo_body">
        <input type="checkbox" name="check" id="task_01" class="checkbox" onclick="strike()">
         <h3 class="todo_details">
            ${addToDo.value}
        </h3>
    </div>
    <div class="editables">
        <button class="star" onclick="starTask()">
            Star
        </button>
        <button class="edit" onclick="editTask()">
            Edit
        </button>
        <button class="delete" onclick="deleteTask()">
            Delete
        </button>
    </div> `
    document.getElementsByClassName('container')[0].appendChild(createOl);
    addToDo.value=''
}

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
        editBtn.innerHTML='Save';
        // task.innerHTML=`<input type='text'>`
    }
    else {
        editBtn.innerHTML='Edit'
    }
}