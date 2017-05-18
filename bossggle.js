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
  if (boxLetter.innerHTML.indexOf('A') === -1 || boxLetter.innerHTML.indexOf('E') === -1 ||
      boxLetter.innerHTML.indexOf('I') === -1 || boxLetter.innerHTML.indexOf('O') === -1 ||
      boxLetter.innerHTML.indexOf('I') === -1)  {
        randomLetter();
  };
};

/* Create a function to be used to add clicked letter to words element,
and change the color of the box to orange */
function buttonClick() {
  var letter = event.target.innerHTML;
  var display = document.getElementsByClassName("words").innerHTML;
  display.push(letter);
  display.join('');
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
//  If the color of the current box is orange, change it to solid gray
     if (boxLetter[i].style.backgroundColor === '#FEA221')
      { boxLetter[i].style.backgroundColor = '#999999';
        boxLetter[i].disabled = false;
     };
   };
  document.getElementsByClassName("words").innerHTML = [];
};

/* Create a function that takes the length of a string and multiplies it by 9,
then adds that value to points to use as a submit button */
function submitWord() {
  var displayedWord = document.getElementsByClassName("words").innerHTML;
  var pointsDisplay = document.getElementsByClassName("points").innerHTML;
  var wordsDisplay = document.getElementsByClassName("list").innerHTML;
  var playerScore = document.getElementsByClassName("number").innerHTML;
  var pointsValue = displayedWord.length * 9;
  playerScore = playerScore + pointsValue;
  pointsDisplay.unshift(pointsValue);
  displayedWord.split();
  wordsDisplay.unshift(displayedWord);
  wordsDisplay.split('');
  clearword();
};


/* Create a function to reset the board, clearing the current word and
re-randomizing the letters in the table */
function resetWord() {
  clearWord();
  document.getElementsByClassName("points").innerHTML = [];
  document.getElementsByClassName("list").innerHTML = [];
  document.getElementsByClassName("number").innerHTML = [];
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
