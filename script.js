const choices = ['Rock','Paper','Scissor'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0, computerScore = 0;

function playGame(playerChoice)
{
    const computerChoice = choices[parseInt(3*Math.random())];
    let result = "";
    if(playerChoice === computerChoice)
    {
        result = "IT'S A TIE! 😐";
    }
    else{
        switch(playerChoice)
        {
            case 'Rock':
                result = (computerChoice === 'Scissor') ? 'YOU WIN! 😃' : 'YOU LOSE! 😞';
            case 'Paper':
                result = (computerChoice === 'Rock') ? 'YOU WIN! 😃' : 'YOU LOSE! 😞';
            case 'Scissor':
                result = (computerChoice === 'Paper') ? 'YOU WIN! 😃' : 'YOU LOSE! 😞'
        
        }
    }
    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent = result;
    
    switch(result)
    {
        case "YOU WIN! 😃":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE! 😞":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;


    }
    
    
    


}
