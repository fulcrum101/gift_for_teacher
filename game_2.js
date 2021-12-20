const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');
let selectedWord = 'VAI JUMS PATIK KAFIJA?';
let playable = true;

const correctLetters = [];
const wrongLetters = [];

function Get(letter){
    if (" ?".includes(letter)){
        return `<span class="punctuation"> ${letter} </span>`;
    }
    return `<span class="letter"> ${correctLetters.includes(letter) ? letter : ''} </span>`;
};
// Show hidden word
function displayWord() {
	wordEl.innerHTML = `
    ${selectedWord
			.split('')
			.map(
				letter => Get(letter)
			)
			.join('')}
  `;
    const innerWord = wordEl.innerText.replace(/[ \n]/g, '');
	if (innerWord == "VAIJUMSPATIKKAFIJA?") {
		window.open("https://youtu.be/LE9Q4JN-Yek");
	}
}



// Keydown letter press
window.addEventListener('keydown', e => {
	const letter = e.key.toUpperCase();
    if (letter != ' ' && letter != '?' ){
	    if (selectedWord.includes(letter)) {
		    if (!correctLetters.includes(letter)) {
			    correctLetters.push(letter);
                displayWord();
            }
        } else {
            window.alert("Nav tada burta");
        }
    }
});

displayWord();

