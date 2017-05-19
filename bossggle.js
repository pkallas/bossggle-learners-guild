// Use onload command to have page load with random words and correct colors
window.onload = function () {
  randomLetter()
};

/* Create a function to obtain a value between 65 and 90, the Unicode values for
the letters between capital A and capital Z */
function getIntForLetter(min, max) {
  min = Math.ceil(65);
  max = Math.floor(91);
  return Math.floor(Math.random() * (max - min)) + min;
};

/* Create a function to return the random value from the prior function as a
letter into the Boggle table*/
function randomLetter() {
  var boxLetter = document.getElementsByClassName("inner");
  for (var i = 0; i < boxLetter.length; i++) {
    var randomNumber = getIntForLetter();
    boxLetter[i].innerHTML = String.fromCodePoint(randomNumber);
  };
  if (!hasVowel()) {
    randomLetter();
  }
};

// Include a function to guarentee that at least one vowel is drawn
function hasVowel() {
  var boxes = Array.from(document.getElementsByClassName("inner"));
  var letters = boxes.map(function (box) {
    return box.innerText
  })
  return /[AEIOU]/.test(letters.join(''))
};

var selectedLetters = [];
var completedWords = [];
var scoreDisplay = [];
var score = 0;

/* Create a function to be used to add clicked letter to words element,
and change the color of the box to orange */
function buttonClick() {
  if (event.target.hasAttribute('disabled')) return;
  var letter = event.target.innerText;
  selectedLetters.push(letter);
  var displayedWord = document.querySelector(".displayedWords")
  displayedWord.innerHTML = selectedLetters.join('');
  event.target.setAttribute('disabled', true);
  event.target.style.backgroundColor = '#FEA221';
};

// Create a function that clears the words and all selected letters
function clearWord() {
// Loop through all of the boxes
  var boxes = document.getElementsByClassName('inner');
  for (var i = 0; i < boxes.length; i++) {
// Change the color of boxes to grey and reenable them
    boxes[i].style.backgroundColor = '#999999';
    boxes[i].removeAttribute('disabled');
  };
  selectedLetters = [];
  document.querySelector(".displayedWords").innerText = '';
};

/* Create a function that takes the length of a string and multiplies it by 9,
then adds that value to points; then it will move the displayed word over to
the side where a word column exists*/
function submitWord() {
  var displayedWord = document.querySelector(".displayedWords");
  var pointsDisplay = document.querySelector(".points");
  var wordsDisplay = document.querySelector(".wordsList");
  var playerScore = document.querySelector(".number");
  score += selectedLetters.length * 9;
  playerScore.innerText = score
  scoreDisplay.unshift(selectedLetters.length * 9);
  pointsDisplay.innerText = scoreDisplay;
  completedWords.unshift(selectedLetters);
  wordsDisplay.innerText = completedWords;
  clearWord();
};


/* Create a function to reset the board, clearing the current word and
re-randomizing the letters in the table */
function resetWord() {
  clearWord();
  var points = document.querySelector(".points");
  points.innerText = '';
  var list = document.querySelector(".wordsList");
  list.innerText = '';
  var number = document.querySelector(".number");
  number.innerText = '';
  randomLetter();
};

// Create a function to unfade the submit button
// function unfadeSubmit() {
//   var submitButton = document.querySelector(".submit");
//   submitButton.style.backgroundColor = '#C7E69A'
// };
// //
// // Create a function to unfade clear button
// function unfadeClear() {
//   var clearButton = document.querySelector(".clear");
//   clearButton.style.backgroundColor = '#F3AEB5'
// };
// // Add event listener for submit button to change color
// document.querySelector(".submit");.addEventListener("DOMContentLoaded",
// setTimeout(unfadeSubmit(), 5000));
//
// // Add event listener for clear button to change color
// document.querySelector(".clear");.addEventListener("DOMContentLoaded",
// setTimeout(unfadeClear(), 5000));
