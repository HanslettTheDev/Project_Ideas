const counter = document.getElementById("vowel");
const text = document.getElementById("text");
const message = document.getElementById("message");
const reset = document.getElementById("reset");
// let vowels = 'aeiou';
// let count = 0;

counter.addEventListener("click", checkText);
reset.addEventListener("click", resetVowelCounter);

// function checkText() {
//     for (let i =0; i < text.value.length; i++){
//         if (vowels.indexOf(text.value[i]) > -1){
//             count++;
//         }
//     message.innerHTML = '<p> Hey We found <b>' + count + ' vowel(s) </b> in your text </p>';
//     }    
// }

function checkText() {
    let usersText = text.value.toLowerCase().split('');
    console.log(usersText)   
    let vowels = [];
    for (let i = 0; i < usersText.length; i++) {
        if (usersText[i] === 'a' || usersText[i] === 'e' || usersText[i] === 'i' || usersText[i] === 'o' || usersText[i] === 'u' ) {
            vowels.push(usersText[i]);
        } else if (usersText[i] === 'A' || usersText[i] === 'E' || usersText[i] === 'I' || usersText[i] === 'O' || usersText[i] === 'U' ) {
            vowels.push(usersText[i]);
        }
    }
    alert("Just " + vowels.length + " vowels found")
}

function resetVowelCounter() {
    message.innerHTML = '';
    text.value = '';
    count = 0;
}
