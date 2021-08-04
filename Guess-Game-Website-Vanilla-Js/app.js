// VARIABLES (LET AND CONST STATEMENTS)
const guessInput = document.getElementById("guess-box");
const gameButton = document.getElementById("guess-button");
const restartButton = document.getElementById("restart");
const historyButton = document.getElementById("historybox");
let correctRandomNumber = getRandomNumber();
let guessedNumbers = [];

// EVENTS LISTENERS
gameButton.addEventListener("click", guessGame);

// FUNCTIONS AND CALLBACKS

// loads this event listeners in a function when the windows loads
window.onload = function() {
    document.getElementById("guess-button").addEventListener("click", guessGame);
    document.getElementById("restart").addEventListener("click", restartGame);
}

// Main game function that illiterates over all the functions in the code and creates the whole game
function guessGame() {
    let usersValue = guessInput.value;
    guessChecker(usersValue);
    guessHistory(usersValue);
    historyBox();
}

// restarts the game
function restartGame() {
    // reset random Number
    correctRandomNumber = getRandomNumber(); 
    // reset error messages
    document.getElementById("errorMessages").innerHTML = "";
    // reset guessedNumbers array
    guessedNumbers = [];
    // reset the history box
    historyButton.innerHTML = "";
}

//Creates random Numbers
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
}

// Guess checker where the logic if guess is to high to low or you win
function guessChecker(usersValue) {
    if (usersValue < correctRandomNumber) {
        guessToLowMessage();
    } else if (usersValue > correctRandomNumber) {
        guessToHighMessage();
    } else {
        winMessage();
    }
}

// Function Saves and creates guess history
function guessHistory(guessed) {
    guessedNumbers.push(guessed);
}

// display history 
// Use a while loopp to go through the guess history numbers array and use string
// concactenation to display the message
function historyBox() {
    let i = guessedNumbers.length - 1;
    let message = "<ul class='list-group'>";
    while (i >= 0) {
        message += "<li class='list-group-item list-group-item-warning'>" + "You Guessed Number " + guessedNumbers[i] + "</li>";
        i--;
    }
    message += '</ul>';
    historyButton.innerHTML = message;
}

// function to create the divs for the error messages
function messageBox(boxType, message){
    let box;
    switch(boxType){
        case "wrong":
            box = "<div class='alert alert-danger' role='alert'>"
            break;
        case "win":
            box = "<div class='alert alert-success' role='alert'>"
            break;
    }
    box += message;
    box += "</div>";
    return box;
}

// Section that uses the switch statements to absorb the messages from the below function
function winMessage() {
    const message = "Congratulations! You Won!";
    let box = messageBox("win", message);
    document.getElementById("errorMessages").innerHTML = box;
}
function guessToHighMessage() {
    const message = "Guess Is Too High!, Try Again!";
    let box = messageBox("wrong", message);
    document.getElementById("errorMessages").innerHTML = box;
}
function guessToLowMessage() {
    const message = "Guess Is Too Low!, Try Again!";
    let box = messageBox("wrong", message);
    document.getElementById("errorMessages").innerHTML = box;
}
function numberOfTrials() {
    const message = "No of Try "
}
