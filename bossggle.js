// Use onload command to have page load with random words and correct colors
window.onload = function () {
  randomLetter()
  vowelCheck()
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
};

// Include a function to guarentee that at least one vowel is drawn
function vowelCheck() {
  var boxLetter = document.getElementsByClassName("inner");
  for (var i = 0; i < boxLetter.length; i++) {
    boxLetter[i].innerHTML
  };
  do {
    randomLetter();
  }
  while (boxLetter.innerHTML.indexOf('A', 'E', 'I', 'O', 'U') === -1)
};

var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
/* Create a function to be used to add clicked letter to words element,
and change the color of the box to orange */
function buttonClick() {
  var letter = event.target.innerHTML;
  array1.push(letter);
  array2 = array1.join('');
  var displayedWord = document.getElementsByClassName("displayedWords")
  for (var i = 0; i < displayedWord.length; i++) {
    displayedWord[i].innerHTML = array2;
  };
  event.target.style.backgroundColor = '#FEA221';
  event.target.disabled = true;
};
/* Add an event handler to utilize the buttonClick function; this function will
remain commented out until it proves necessary */
// var innerClass = document.getElementsByClassName("inner");
// for (var i = 0; i < innerClass.length; i++) {
//   innerClass[i].addEventListener("click", buttonClick());
// };

// Create a function that clears the words and all selected letters
function clearWord() {
// Loop through all of the boxes
  var boxLetter = document.getElementsByClassName('inner');
    for (var i = 0; i < boxLetter.length; i++) {
// Change the color of boxes to grey and reenable them
      boxLetter[i].style.backgroundColor = '#999999';
      boxLetter[i].disabled = false;
  };
  var displayedWord = document.getElementsByClassName("displayedWords");
    for (var t = 0; t < displayedWord.length; t++) {
      displayedWord[t].innerHTML = array3;
  };
  array1 = [];
  array2 = [];
};

/* Create a function that takes the length of a string and multiplies it by 9,
then adds that value to points; then it will move the displayed word over to
the side where a word column exists*/
function submitWord() {
  var displayedWord = document.getElementsByClassName("displayedWords");
  var pointsDisplay = document.getElementsByClassName("points");
  var wordsDisplay = document.getElementsByClassName("wordsList");
  var playerScore = document.getElementsByClassName("number");
  var pointsValue = array2.length * 9;
  for (var i = 0; i < playerScore.length; i++) {
    playerScore[i].innerHTML = array5
  };
  for (var i = 0; i < playerScore.length; i++) {
    playerScore[i].innerHTML = array5 + pointsValue;
  };
  for (var z = 0; z < pointsDisplay.length; z++) {
    pointsDisplay.innerHTML[z].unshift(pointsValue);
  };
  array4 = array2.split();
  for (var w = 0; w < wordsDisplay.length; w++) {
    wordsDisplay.innerHTML[w].unshift(array4);
    wordsDisplay.innerHTML[w].join('');
  };
  clearWord();
};


/* Create a function to reset the board, clearing the current word and
re-randomizing the letters in the table */
function resetWord() {
  clearWord();
  var points = document.getElementsByClassName("points");
  for (var i = 0; i < points.length; i++) {
    points[i].innerHTML = [];
  };
  var list = document.getElementsByClassName("wordsList");
  for (var q = 0; q < list.length; q++) {
    list[q].innerHTML = [];
  };
  var number = document.getElementsByClassName("number");
  for (var w = 0; w < number.length; w++) {
    number[w].innerHTML = [];
  };
  randomLetter();
  vowelCheck();
};

// Create a function to unfade the submit button
function unfadeSubmit() {
  var submitButton = document.getElementsByClassName("submit");
  submitButton.style.backgroundColor = '#C7E69A'
};
//
// Create a function to unfade clear button
function unfadeClear() {
  var clearButton = document.getElementsByClassName("clear");
  clearButton.style.backgroundColor = '#F3AEB5'
};
// Add event listener for submit button to change color
var submitClass = document.getElementsByClassName("submit");
 for (var i = 0; i < submitClass.length; i++) {
  submitClass[i].addEventListener("DOMContentLoaded", setTimeout(
    unfadeSubmit(), 5000));
};

// Add event listener for clear button to change color
var clearClass = document.getElementsByClassName("clear");
 for (var i = 0; i < clearClass.length; i++) {
  clearClass[i].addEventListener("DOMContentLoaded", setTimeout(
    unfadeClear(), 5000));
};
