let USERSCORE = 0;
let COMPUTERSCORE = 0;
const USERSCORE_SPAN = document.getElementById("user-score")
const COMPUTERSCORE_SPAN = document.getElementById("computer-score")
const SCOREBOARD_div = document.querySelector(".score-board");
const RESULT_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return(choices[Math.floor(Math.random() * 3)]);
}

function choiceConverter(letter) {
    if (letter === "r") {
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function userWin(user, computer) {
    USERSCORE++;
    USERSCORE_SPAN.innerHTML = USERSCORE;
    COMPUTERSCORE_SPAN.innerHTML = COMPUTERSCORE;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    RESULT_p.innerHTML = `${choiceConverter(user)}${smallUserWord} beats ${choiceConverter(computer)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function computerWin(user, computer) {
    COMPUTERSCORE++;
    USERSCORE_SPAN.innerHTML = USERSCORE;
    COMPUTERSCORE_SPAN.innerHTML = COMPUTERSCORE;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    RESULT_p.innerHTML = `${choiceConverter(user)}${smallUserWord} loses ${choiceConverter(computer)}${smallCompWord}. You lose :(`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draws(user, computer) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    RESULT_p.innerHTML = `${choiceConverter(user)}${smallUserWord} equals ${choiceConverter(computer)}${smallCompWord}. It's a draw!`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            userWin(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            computerWin(userChoice, computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draws(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();