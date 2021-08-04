// store the add chores buttons and input element
const choresAdder = document.getElementById('chores-records');
const addChoresButton = document.getElementById('chores-adder');
const choresInput = document.getElementById('chores');
const assignChores = document.getElementById('assign-chores');

// use let to grab the classes of all <td> elements with class chores1,2 and 3
let assignedChores1 = document.getElementsByClassName('chores1');
let option = document.getElementsByClassName('op2');

// Event listeners to trigger specific functions
addChoresButton.addEventListener('click', addChores);
assignChores.addEventListener('click', choresCreator);

// function 1: Add chores to a list
let allChores = ["wash dishes","wash plates", "clean kitchen", "dryclean the house", "clean windows", "clean toilet", 
"sweep sorroundings", "sweep whole house", "clean cup webs", "clean fridge", 
"carry water in bottles", "fill galons", "Arrange parlour", "clean front door", 
"clean back side", "clean right side", "bend dresses", "clean shoes", "bath wifi"];

function addChores() {
    let usersText = choresInput.value;
    allChores.push(usersText);
    console.log(allChores);
}

// function 2: random chores generator
function test(i) {
    assignedChores1[i].innerHTML = allChores[Math.floor(Math.random() * allChores.length)];
}

// push to all td 
function choresCreator() {
    let i = 0;
    while (i < assignedChores1.length) {
        test(i);
        if (assignedChores1[i].value === assignedChores1[i].value) {
            assignedChores1[i].remove;
            assignedChores1[i].innerHTML = allChores[Math.floor(Math.random() * allChores.length)];
        }
        i++;
    }
}