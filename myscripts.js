//rock paper scissors project//
//begin writing a function called computerPlay- that will randomly generate rock, paper of scissors

let playerScore=0;
let computerScore=0;
let drawScore= 0;
function computerPlay(){
    let x= Math.floor(Math.random()*3)+1
    if (x===1){
        return "Paper";
    }else if (x === 2){
        return "Rock";
    }else if(x===3){
        return "Scissors";
    }
}



// write a function that plays a single round of rock paper scissors- with two parameters, playerSelection and computerSelection- return a string that declares a winner. make it case insensitive

function playRockPaperScissors(playerSelection,computerSelection){
    computerSelection = computerPlay();
    let playerPrompt = window.prompt("Rock, Paper, or Scissors?");
    playerSelection = playerPrompt.toLowerCase();
    if (playerSelection === "paper" && computerSelection === "Rock"){
        playerScore++
        return ("Player Wins!");
    }else if (playerSelection === "paper" && computerSelection ==="Scissors"){
        computerScore++
        return ("Computer Wins.")
    }else if (playerSelection === "paper" && computerSelection === "Paper"){
        drawScore++
        return ("Tie.");
    }else if (playerSelection === "rock" && computerSelection ==="Rock"){
        drawScore++
        return ("Tie.");
    }else if (playerSelection === "rock" && computerSelection ==="Scissors"){
        playerScore++
        return ("Player Wins!");
    }else if (playerSelection === "rock" && computerSelection === "Paper"){
        computerScore++
        return ("Computer Wins.");
    }else if (playerSelection === "scissors" && computerSelection ==="Rock"){
        computerScore++
        return ("Computer Wins.");
    }else if (playerSelection === "scissors" && computerSelection === "Scissors"){
        drawScore++
        return ("Tie.");
    }else if (playerSelection ==="scissors" && computerSelection === "Paper"){
        playerScore++
        return ("Player Wins!")
    }else{
        return (`${playerPrompt} isn't a rock, paper, or scissors!`);
    }
}

//write a function called game() call the play round function inside of this one to play a five round game that keeps score and reports a winner or loser at the end. use loops

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRockPaperScissors());
    }
}


console.log(game());
console.log(playerScore);
console.log(computerScore);
console.log(drawScore);

//use condole.log to display the results of each round and the winner at the end
//use prompt to get the input from the user

/*let playerScore = 0;
let computerScore = 0;
let draws = 0;

let tally = (playerScore,computerScore,draws);

function gameScore(){
    let result = playRockPaperScissors();

    if (result === "You chose paper. Computer chose Rock. Player Wins!"){
        playerScore++;
    }else if (result=== "You chose paper. Computer chose scissors. Compter Wins."){
        computerScore++;
    }else if (result === "You chose paper. Computer Chose Paper. Tie"){
        draws++;
    }else if (result === "You chose rock. Computer chose Rock. Tie"){
        draws++;
    }else if (result === "You chose rock. Computer chose Scissors. Player Wins!"){
        playerScore++;
    }else if (result === "You chose rock. Computer chose Paper. Computer Wins."){
        computerScore++;
    }else if (result === "You chose scissors. Computer chose Rock. Computer Wins." ){
        computerScore++;
    }else if (result === "You chose scissors. Computer chose Scissors. Tie."){
        draws++;
    }else if (result === "You chose scissors. Computer chose Paper. Player Wins!"){
        playerScore++;
    }
}*/