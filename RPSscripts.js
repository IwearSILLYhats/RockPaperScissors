//colorscheme: black & grey with red, yellow, and blue color coding for rock, paper, and scissors (respectively)
//buttons should have low-res images of hands making the respective shapes, highlighted in their individual colors
//clicking a button should play an animation that add your pick's image to a div on the left, and the computer's pick to a div on the right. Then it ramps up glow in the respective color while removing right padding on the left image and left padding on the right one, simulating the items crashing into each other. It should also play a sound effect.


const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {playGame("rock");
console.log("rock")});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {playGame("paper");
console.log("paper")});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {playGame("scissors");
console.log("scissors")});

let homeScore = document.getElementById("homeTeam");
let awayScore = document.getElementById("awayTeam");
        
        function computerPlay() {
            //Generates one random output from the computer (either Rock Paper or Scissors)
        let pick = Math.floor(Math.random() * 3) +1;
        switch (pick){
            case 1: 
            return "rock"
            break;
            case 2: 
            return "paper"
            break;
            case 3: 
            return "scissors"
        }
    }


function playGame(choice) {
let compy = computerPlay();

if (choice === compy) {
document.getElementById('score').textContent = "Tie game, play another round!";
}
else if ((choice + compy) === 'rockscissors' || (choice + compy) === 'scissorspaper' || (choice + compy) === 'paperrock') {
    document.getElementById('score').textContent = `You win! ${choice.replace(choice.slice(0,1), choice.slice(0,1).toUpperCase())} beats ${compy.replace(compy.slice(0,1), compy.slice(0,1).toUpperCase())}.`;
    addScore(homeScore);
}
else if ((choice + compy) === 'scissorsrock' || (choice + compy) === 'paperscissors' || (choice + compy) === 'rockpaper') {
    document.getElementById('score').textContent = `You lose! ${compy.replace(compy.slice(0,1), compy.slice(0,1).toUpperCase())} beats ${choice.replace(choice.slice(0,1), choice.slice(0,1).toUpperCase())}.`;
    addScore(awayScore);
}

}

function addScore (winner){
newNumber = parseInt(winner.textContent);
winner.textContent = newNumber + 1;
if (homeScore.textContent == 5){
    homeScore.textContent = 0;
    awayScore.textContent = 0;
    alert ('Congratulations, you win!');
}
else if (awayScore.textContent == 5){
    homeScore.textContent = 0;
    awayScore.textContent = 0;
    alert ('Boo! You lost to a computer!');
}


}
