const rockImg = `<img src="Images/rock.png" alt="rock" />`;
const paperImg = `<img src="Images/paper.png" alt="rock" />`;
const scissorsImg =`<img src="Images/scissors.png" alt="rock" />`;

// // addition of span tag
document.querySelectorAll("#result-user-stat")[0].innerHTML='User: <span ID="userImg"> </span>';
document.querySelectorAll("#result-comp-stat")[0].innerHTML='Computer: <span ID="compImg"> </span>';
document.querySelectorAll("#result-final-stat")[0].innerHTML=`<p id="result-final-stat">Winner: <span ID="winnerTextMsg"> </span> </p>`

// generate computer choice and insert computer choice image
let computerChoiceArray = [0];
let userChoiceArray = [0];
function retComChoice(){

    function computerChoice(){
        return Math.floor(Math.random()*3)
        };

        switch (computerChoice()) {
            case 0:
                document.getElementById("compImg").innerHTML = rockImg;
                computerChoiceArray[0]=0;
                break;
             case 1:
                document.getElementById("compImg").innerHTML = paperImg;
                computerChoiceArray[0]=1;
                break;
            case 2:
                document.getElementById("compImg").innerHTML = scissorsImg;
                computerChoiceArray[0]=2;
                break;
        };
    };
     
//  score incriment function
 let userScore = 0;
document.getElementById("userScoreVal").innerText=userScore;
function userScoreAddition(){
    return userScore = userScore + 1;
};

let computerScore = 0;
document.getElementById("compScoreVal").innerText=computerScore;
function computerScoreAddition(){
    return computerScore = computerScore +1;
};

// declare who won and add score
function winner(){
    if (computerChoiceArray[0] == userChoiceArray[0]){
        return document.getElementById("winnerTextMsg").innerHTML = `Draw`; 
    }

    else if(userChoiceArray[0]==0 && computerChoiceArray[0]== 1){
        document.getElementById("winnerTextMsg").innerHTML ="Computer";
        document.getElementById("compScoreVal").innerText=computerScoreAddition();
    }

    else if(userChoiceArray[0]==0 && computerChoiceArray[0]== 2){
        document.getElementById("winnerTextMsg").innerHTML ="User!!"
        document.getElementById("userScoreVal").innerText=userScoreAddition();
    }

    else if(userChoiceArray[0]==1 && computerChoiceArray[0]== 0){
        document.getElementById("winnerTextMsg").innerHTML ="User!!"
        document.getElementById("userScoreVal").innerText=userScoreAddition();
    }

    else if(userChoiceArray[0]==1 && computerChoiceArray[0]== 2){
        document.getElementById("winnerTextMsg").innerHTML ="Computer";
        document.getElementById("compScoreVal").innerText=computerScoreAddition();
    }

    else if(userChoiceArray[0]==2 && computerChoiceArray[0]== 0){
        document.getElementById("winnerTextMsg").innerHTML ="Computer";
        document.getElementById("compScoreVal").innerText=computerScoreAddition();
    }

    else if(userChoiceArray[0]==2 && computerChoiceArray[0]== 1){
        document.getElementById("winnerTextMsg").innerHTML ="User!!"
        document.getElementById("userScoreVal").innerText=userScoreAddition();
    }
};
       
// user choice is rock
let rockBtn = document.getElementById("r");
rockBtn.addEventListener("click", addRockImg);
function addRockImg(){
    document.getElementById("userImg").innerHTML = rockImg;
    userChoiceArray[0]=0;
    
    // generate computer choice and insert in froent of computer:
    retComChoice();
    
    // declare who won and add score
    winner();
    };

//  user choice is paper
let paperBtn = document.getElementById("p");
paperBtn.addEventListener("click", addPaperImg);
function addPaperImg(){
    document.getElementById("userImg").innerHTML = paperImg;
    userChoiceArray[0]=1;
    retComChoice();
    winner();
};

//  user choice is scissors
let scissorsBtn = document.getElementById("s");
scissorsBtn.addEventListener("click", addScissorsImg);
function addScissorsImg(){
    document.getElementById("userImg").innerHTML = scissorsImg;
    userChoiceArray[0]=2;
    retComChoice();
    winner();
};