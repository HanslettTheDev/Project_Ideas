
// checking for clicks from mousepad or mouse

var i = 0;
var numberOfDrums = document.querySelectorAll(".drum").length;

while (i < numberOfDrums) {

    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    function handleClick() {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml)
    }
    i++;
}


// checking for keyboard press

document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonAnimation(event.key)
});

function makeSound(key) {
    switch (key) {

        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        case "s":
            var sounds = new Audio('sounds/snare.mp3');
            sounds.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        default: console.log();

    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

setTimeout(function timeroff(){
    activeButton.classList.remove("pressed");
}, 100)
}

//end of code
