//rock paper scissors project//
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

let playerPrompt = "rock"

// write a function that plays a single round of rock paper scissors- with two parameters, playerSelection and computerSelection- return a string that declares a winner. make it case insensitive

function playRockPaperScissors(playerSelection,computerSelection){
    computerSelection = computerPlay();
    playerSelection = playerPrompt.toLowerCase();
    console.log(`You chose ${playerSelection}`);
    if (playerSelection === "paper" && computerSelection === "Rock"){
        console.log("Computer chose Rock. Player Wins!");
    }else if (playerSelection === "paper" && computerSelection ==="Scissors"){
        console.log("Computer chose scissors. Compter Wins.")
    }else if (playerSelection === "paper" && computerSelection === "Paper"){
        console.log("Computer Chose Paper. Tie");
    }else if (playerSelection === "rock" && computerSelection ==="Rock"){
        console.log("Computer chose Rock. Tie");
    }else if (playerSelection === "rock" && computerSelection ==="Scissors"){
        console.log("Computer chose Scissors. Player Wins!");
    }else if (playerSelection === "rock" && computerSelection === "Paper"){
        console.log("Computer chose Paper. Computer Wins.");
    }else if (playerSelection === "scissors" && computerSelection ==="Rock"){
        console.log("Computer chose Rock. Computer Wins.");
    }else if (playerSelection === "scissors" && computerSelection === "Scissors"){
        console.log("Computer chose Scissors. Tie.");
    }else if (playerSelection ==="scissors" && computerSelection === "Paper"){
        console.log("Computer chose Paper. Player Wins!")
    }else{
        console.log(`${playerPrompt} isn't a rock, paper, or scissors!`);
    }
}
playRockPaperScissors();

//write a function called game() call the play round function inside of this one to play a five round game that keeps score and reports a winner or loser at the end. use loops
//use condole.log to display the results of each round and the winner at the end
//use prompt to get the input from the user

