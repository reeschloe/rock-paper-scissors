let choices = ["Rock","Paper","Scissors"]
let tie = 0, win = 0, lose = 0
function computerPlay() {
    randChoice = choices[Math.floor(Math.random() * choices.length)]
    return randChoice
}

function playRound(playerSelection) {
    computerSelection = computerPlay()
    if (computerSelection === playerSelection) {
        tie = tie + 1
        stringResult = "You tie!"
    }
    else if (computerSelection === "Rock") {
        if (playerSelection === "Paper") {
            win = win + 1
            stringResult = "You win!"
        }
        else if (playerSelection === "Scissors") {
            lose = lose + 1
            stringResult = "You lose!"
        }
    }
    else if (computerSelection === "Paper") {
        if (playerSelection === "Scissors") {
            win = win + 1
            stringResult = "You win!"
        }
        else if (playerSelection === "Rock") {
            lose = lose + 1
            stringResult = "You lose!"
        }
    }
    else if (computerSelection === "Scissors") {
        if (playerSelection === "Paper") {
            lose = lose + 1
            stringResult = "You lose!"
        }
        else if (playerSelection === "Rock") {
            win = win + 1
            stringResult = "You win!"
        }
    }
    sumOfResults = "Wins: " + win + ". Losses: " + lose + ". Ties: " + tie + "."
    div.innerHTML = "Your selection: " + playerSelection + ".<br>" + "Computer selection: " + computerSelection + ".<br>" + stringResult + "<br>" + sumOfResults
    if (win === 5) {
        div.innerHTML = "Your selection: " + playerSelection + ".<br>" + "Computer selection: " + computerSelection + ".<br>" + stringResult + "<br>" + sumOfResults + "<br> 5 wins! You win the game!"
    }
    if (lose === 5) {
        div.innerHTML = "Your selection: " + playerSelection + ".<br>" + "Computer selection: " + computerSelection + ".<br>" + stringResult + "<br>" + sumOfResults + "<br> 5 losses! You lose the game!"
    }
}
const body = document.querySelector('body')
const div = document.createElement('div')
body.appendChild(div)


const rock = document.getElementById('rock')
rock.addEventListener("click", () => playRound("Rock"))

const paper = document.getElementById('paper')
paper.addEventListener("click", () => playRound("Paper"))

const scissors = document.getElementById('scissors')
scissors.addEventListener("click", () => playRound("Scissors"))


