let addBtn = document.getElementsByClassName('add')[0];
let addToDo = document.getElementsByClassName('myInput')[0];
let editBtn = document.getElementsByClassName('edit-btn')[0];
let deleteBtn = document.getElementsByClassName('delete-btn')[0];
let editBtnDiv = document.getElementsByClassName('editbtndiv')[0];
let chekBox = document.getElementsByClassName('check-btn')[0];
let taskDetails = document.getElementsByClassName('task')[0];
let newChild ;

let edit = ()=>{
            if(editBtn.innerHTML=='Edit'){
                editBtn.innerHTML='Save';
                taskDetails.contentEditable = true;
            }
            else{
                editBtn.innerHTML='Edit';
                taskDetails.contentEditable = false;
            }
        };

        let delt = ()=>{
        };

        function taskcheck(){
            if(chekBox.checked == true){
                taskDetails.innerHTML=`<s>${taskDetails.innerHTML}</s>`;

                editBtnDiv.style.display='none'
            }
            else{
                taskDetails.innerHTML=taskDetails.innerText;
                editBtnDiv.style.display='block'
            }
        };

let addTask = () =>{
    let createOl =document.createElement('tr');
    createOl.innerHTML=
    `
    <td>
                <input class="check-btn" type="checkbox" onclick="taskcheck()">
                </td>
                <td style="width: 80%;" contenteditable="false" class="task">
                    <h4>${addToDo.value}</h4>  
                </td>
                <td class="editbtndiv">
                    <button class="edit-btn" onclick="edit()">Edit</button>
                </td>
                <td>
                    <button class="delete-btn" onclick="delt()">Delete</button>
                </td>
    `
    document.getElementsByClassName('container')[0].appendChild(createOl);
    addToDo.value=''
}
