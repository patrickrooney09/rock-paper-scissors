//rock paper scissors project//

// write variables that will store scoring information
let playerScore=0;
let computerScore=0;
let drawScore= 0;

//begin writing a function called computerPlay- that will randomly generate rock, paper of scissors
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
    }if (playerScore > computerScore){
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}. You win!`)
    }else if (playerScore < computerScore){
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}. Computer Wins.`)
    }else{
        console.log(`All tied up.`)
    }
}


game();




