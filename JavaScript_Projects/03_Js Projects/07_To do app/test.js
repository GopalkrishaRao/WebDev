let addBtn = document.getElementsByClassName('add')[0];
let tableRow = document.getElementsByClassName('tablerow')[0];
let table = document.getElementsByClassName('table')[0];

let addToDo = document.getElementsByClassName('myInput')[0];
let editBtn = document.getElementsByClassName('edit-btn')[0];
let deleteBtn = document.getElementsByClassName('delete-btn')[0];
let editBtnDiv = document.getElementsByClassName('editbtndiv')[0];
let chekBox = document.getElementsByClassName('check-btn')[0];
let taskDetails = document.getElementsByClassName('task')[0];
let newChild ;

// Edit to do list
// let edit = ()=>{
//             if(editBtn.innerHTML=='Edit'){
//                 editBtn.innerHTML='Save';
//                 taskDetails.contentEditable = true;
//             }
//             else{
//                 editBtn.innerHTML='Edit';
//                 taskDetails.contentEditable = false;
//             }
//         };

// Deleting a task
        let delt = ()=>{
            if(confirm('This task will be deleted')){
                table.removeChild(table.firstElementChild)
            }
        };
// Check box to strick out the task that are completed
        // function taskcheck(){
        //     if(chekBox.checked == true){
        //         taskDetails.innerHTML=`<s>${taskDetails.innerHTML}</s>`;
        //         editBtn.innerHTML='Edit';
        //         taskDetails.contentEditable = false;
        //         editBtnDiv.style.display='none'
        //     }
        //     else{
        //         taskDetails.innerHTML=taskDetails.innerText;
        //         editBtnDiv.style.display='block'
        //     }
        // };

// Add task  to do list
let addTask = () =>{
    if(addToDo.value==''){
        alert ("This field cannot be empty")

    }
    else{
    let createOl =document.createElement('tr');
    createOl.setAttribute('class','tablerow' )
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
    document.getElementsByClassName('table')[0].appendChild(createOl);
    addToDo.value=''
}
};



//test

let tableSelect=Array.from(document.getElementsByClassName('tablerow'));
console.log(tableSelect);
console.log(tableSelect.length)

tableSelect.map((tableRow)=>{
    tableRow.addEventListener('click', (x)=>{
        x.target.style.background='pink'   
    })

    // Check box to strick out the task that are completed

        function taskcheck(b){
            alert("testtsgdgf")
            if(chekBox.checked == true){
    
                b.target.taskDetails.innerHTML=`<s>${taskDetails.innerHTML}</s>`;
                b.target.editBtn.innerHTML='Edit';
                b.target.taskDetails.contentEditable = false;
                b.target.editBtnDiv.style.display='none'

            }
            else{
                b.target.taskDetails.innerHTML=taskDetails.innerText;
                b.target. editBtnDiv.style.display='block'
            }
        };

        editBtn.addEventListener('click',  (c)=>{
            
            if(editBtn.innerHTML=='Edit'){
                editBtn.innerHTML='Save';
                taskDetails.contentEditable = true;
            }
            else{
                editBtn.innerHTML='Edit';
                taskDetails.contentEditable = false;
            }
        }
        )

})


