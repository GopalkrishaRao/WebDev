let signUp = document.querySelector('#signup');
let checkBox = document.querySelector('.check');
let viewPassword = document.querySelectorAll('.viewpw')[0];
let password = document.querySelector('.pass_word');
let confirmPassword = document.querySelector('.con_pass');
let form = document.querySelector('.inputarea');

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
// })

let validateForm = ()=>{
    
  
    if(password.value!=confirmPassword.value){
        confirmPassword.style.border= "2px solid red";
        alert ("Password does not match");
    }
    else{
        password.style.border= "2px solid green";
        confirmPassword.style.border= "2px solid green";
        // setTimeout(()=>{
        //     alert("Form has been submitted")
        //     // form.submit()
        // }, 2000)
    }
};

signUp.addEventListener('click', validateForm);

// check box password visibility
checkBox.addEventListener('click', ()=>{
    if(viewPassword.type==='password'){
        viewPassword.type = 'text';
        confirmPassword.type='text';
    }
    else{
        viewPassword.type='password';
        confirmPassword.type='password';
    }
});

