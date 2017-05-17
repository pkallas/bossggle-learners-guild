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
// Include a statement to guarentee that at least one vowel is drawn
  if (boxLetter.indexOf(65) === -1 || boxLetter.indexOf(69) === -1 ||
      boxLetter.indexOf(73) === -1 || boxLetter.indexOf(79) === -1 ||
      boxLetter.indexOf(85) === -1) {
        for (var i = 0; i < boxLetter.length; i++) {
          var randomNumber = getIntForLetter();
          boxLetter[i].innerHTML = String.fromCodePoint(randomNumber);
    };
  };
};

/* Create a function to be used to add clicked letter to displayedWord element,
and change the color of the box to orange */
function buttonClick() {
  var letter = document.getElementsByClassName("inner");
  letter.style.color = 'rgb(255, 165, 0)';
  var display = document.getElementById("displayedWord");
  document.getElementById("displayedWord").innerHTML = display.push(letter.innerHTML);
};
/* Add an event handler to utilize the buttonClick function; this function will
remain commented out until it proves necessary */
// document.getElementsByClassName("inner").addEventListener("click", buttonClick());

/* Create a function that takes the length of a string and multiplies it by 9,
then adds that value to points to use as a submit button */
function submitWord() {
  var display = document.getElmentById("displayedWord");
  document.getElementById("points").innerHTML =
    document.getElementById("points").unshift(display.length * 9);
  document.getElementById("Score").innerHTML =
    document.getElementById("Score").innerHTML + display.length * 9;
  document.getElementById("list").unshift(displayedWord);
};

// Create a function that clears the displayedWord and all selected letters
function clearWord() {
// Loop through all of the boxes
 var boxLetter = document.getElementsByClassName('inner');
    for (var i = 0; i < boxLetter.length; i++) {
//  If the color of the current box is orange, change it to solid gray
     if (boxLetter[i].style.color === 'rgb(255, 165, 0)')
      { boxLetter[i].style.color = 'rgb(128, 128, 128)';
     };
   };
   return document.getElementById("displayedWord").innerHTML = [];
// };

/* Create a function to reset the board, clearing the current word and
re-randomizing the letters in the table */
function resetWord() {
  clearWord();
  randomLetter();
};

Create a function to unfade the submit button
function unfadeSubmit() {
  var submitButton = document.getElementsByClassName("submit");
  submitButton.style.color = #C7E69A
};

// Create a function to unfade clear button
function unfadeClear() {
  var clearButton = document.getElementsByClassName("clear");
  clearButton.style.color = #F3AEB5
}
// Add event listener for submit button to change color
document.getElementsByClassName("submit").addEventListener("DOMContentLoaded"
  function() {
    setTimeout(unfadeSubmit(), 5000);
});

// Add event listener for clear button to change color
document.getElementsByClassName("clear").addEventListener("DOMContentLoaded"
  function() {
    setTimeout(unfadeClear(), 5000);
});

// Use onload command to have page load with random words and correct colors
window.onload = function resetWord() {
  clearWord();
  randomLetter();
};
