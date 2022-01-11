let choices = ["Rock","Paper","Scissors"]

function computerPlay() {
    randChoice = choices[Math.floor(Math.random() * choices.length)]
    return randChoice
}

function camelCase(string) {
    str1 = string.charAt(0).toUpperCase()
    str2 = string.slice(1).toLowerCase()
    return str1 + str2
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "tie"
    }
    else if (computerSelection === "Rock") {
        if (playerSelection === "Paper") {
            return "win"
        }
        else if (playerSelection === "Scissors") {
            return "lose"
        }
    }
    else if (computerSelection === "Paper") {
        if (playerSelection === "Scissors") {
            return "win"
        }
        else if (playerSelection === "Rock") {
            return "lose"
        }
    }
    else if (computerSelection === "Scissors") {
        if (playerSelection === "Paper") {
            return "lose"
        }
        else if (playerSelection === "Rock") {
            return "win"
        }
    }
}

function game() {
    let tie = 0, win = 0, lose = 0
    for (let i = 1; i < 6; i++) {
        playerSelection = camelCase(prompt("Rock, Paper, or Scissors?"))
        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection);
        if (result === "tie") {
            tie = tie + 1
            stringResult = "You tie!"
        }
        else if (result === "win") {
            win = win + 1
            stringResult = "You win! " + playerSelection + " beats " + computerSelection + "!"
        }
        else {
            lose = lose + 1
            stringResult = "You lose! " + computerSelection + " beats " + playerSelection + "!"
        }
        sumOfResults = "Wins: " + win + ". Losses: " + lose + ". Ties: " + tie + "."
        console.log(stringResult)
        console.log(sumOfResults)
    }
    if (win > lose) {
        return "You win!"
    }
    else if (lose > win) {
        return "You lose!"
    }
    else {
        return "It's a tie!"
    }
}