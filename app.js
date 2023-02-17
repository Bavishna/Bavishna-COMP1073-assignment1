// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButtons = document.querySelectorAll('.btn');

var twoDimensionalArray = [
    ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'],
    ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'],
    ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'],
    ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'],
    ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']
];

var storyElement = document.querySelector('#story');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
for (let i = 0; i < speakButtons.length; i++) {
    var speakButton = speakButtons[i];

    if (speakButton.id === 'generate-story') {
        speakButton.onclick = function () {
            speakNow(textToSpeak);
            storyElement.textContent = textToSpeak;
        }
    } else if (speakButton.id === 'generate-random-story') {
        speakButton.onclick = function () {
            var randomStory = '';
            for (let j = 0; j < twoDimensionalArray.length; j++) {
                randomStory = randomStory + ' ' + twoDimensionalArray[j][Math.floor(Math.random() * twoDimensionalArray[j].length)];
            }
            speakNow(randomStory);
            storyElement.textContent = randomStory;
        }
    } else {
        speakButton.onclick = function () {
            var randomWord = twoDimensionalArray[i][Math.floor(Math.random() * twoDimensionalArray[i].length)];
            speakNow(randomWord);
            textToSpeak = textToSpeak + ' ' + randomWord;
        }
    }
}

var resetButton = document.querySelector('#reset');
resetButton.onclick = function () {
    textToSpeak = '';
}