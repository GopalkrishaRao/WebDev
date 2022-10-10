let rock = document.getElementById("r")
let paper = document.getElementById("p")
let scissors = document.getElementById("s")

// addition of span tag
document.querySelectorAll("#result-user-stat")[0].innerHTML='User: <span ID="userimg"> </span>';
document.querySelectorAll("#result-comp-stat")[0].innerHTML='Computer: <span ID="compimg"> </span>'


// Generate r/p/s choice of computer randomly
function computerChoice(){
    return Math.floor(Math.random()*3)
}

// select users cohice as rock and generate computer's random choice
rock.addEventListener("click", selectRock)

function selectRock(){
    document.getElementById("userimg").innerHTML= 
    `<img src="Images/rock.png" alt="rock" />`;

    // adds computer choice

    let computerChoiceRestut = computerChoice();

    if (computerChoiceRestut=="0"){
        document.getElementById("compimg").innerHTML= 
    ` <img src="Images/rock.png" alt="rock" />`;
    }
    else if(computerChoiceRestut=="1"){
        document.getElementById("compimg").innerHTML= 
    ` <img src="Images/paper.png" alt="paper" />`;
    }
    else{
        document.getElementById("compimg").innerHTML= 
    ` <img src="Images/scissors.png" alt="scissors" />`;  
    };
};

// select users cohice as paper and generate computer's random choice
paper.addEventListener("click", selectPaper)

function selectPaper(){
    document.getElementById("userimg").innerHTML= 
    `<img src="Images/paper.png" alt="paper" />`;

    // adds computer choice

    let computerChoiceRestut = computerChoice();

    if (computerChoiceRestut=="0"){
        document.getElementById("compimg").innerHTML= 
    `<img src="Images/rock.png" alt="rock" />`;
    }
    else if(computerChoiceRestut=="1"){
        document.getElementById("compimg").innerHTML= 
    `<img src="Images/paper.png" alt="paper" />`;
    }
    else{
        document.getElementById("compimg").innerHTML= 
    `<img src="Images/scissors.png" alt="scissors" />`;  
    };
};

// select users cohice as scissor and generate computer's random choice
scissors.addEventListener("click", selectScissors)

function selectScissors(){
    document.getElementById("userimg").innerHTML= 
    `<img src="Images/scissors.png" alt="scissors" />`;

    // adds computer choice

    let computerChoiceRestut = computerChoice();

    if (computerChoiceRestut=="0"){
        document.getElementById("compimg").innerHTML= 
    `<img src="Images/rock.png" alt="rock" />`;
    }
    else if(computerChoiceRestut=="1"){
        document.getElementById("compimg").innerHTML= 
    `<img src="Images/paper.png" alt="paper" />`;
    }
    else{
        document.getElementById("compimg").innerHTML= 
    `<img src="Images/scissors.png" alt="scissors" />`;  
    };

    
};


let userRock = `<img src="Images/rock.png" alt="rock" />`;
let userPaper = `<img src="Images/paper.png" alt="paper" />`;
let userScissors = `<img src="Images/scissors.png" alt="scissors" />`;

let computerRock = `<img src="Images/rock.png" alt="rock" />`;
let computerPaper= `<img src="Images/paper.png" alt="paper" />`;
let computerScissors= `<img src="Images/scissors.png" alt="scissors" />`;

let userInnerHtml = document.getElementById("userimg").innerHTML;
let computerInnerHtml = document.getElementById("compimg").innerHTML;



if(userInnerHtml==computerInnerHtml){
    alert ("Please restart");
}
else{
    alert("someonhe has own")
}

