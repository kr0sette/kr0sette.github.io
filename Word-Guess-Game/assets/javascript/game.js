    //javascript will run after the DOM has been loaded fully
document.addEventListener("DOMContentLoaded", function() {
    //js code below

// Global Variables
var classList = [
    "Anthony Maddatu",
    "Jason Goncalves",
    "Kelly Quinn",
    "William King",
    "Alison Smith",
    "Kristine Enerio",
    "Travis Collins",
    "Vikas",//Check this name
    "Anthony Nunez",
    "Charles Mainegra",
    "Christian Vasquez",//Check if part of class
    "Christopher Chenet",//Check if still in class
    "Corey Bott", //Check if still in class
    "Crystal Espaillat",
    "Dan Buckland",
    "Dean Motan",//Check if still in class
    "Deborah Ridgard",
    "Evan Bartlik",
    "George Grossakis",//Check this name
    "Jairus Clark",
    "Jarrett Massa",
    "Jonathan Glincman",
    "Kunle Babatunde",
    "Michael Peng",
    "Michael Kim",//Check is still in class
    "Palak Shah",//Check this name
    "Rommel Montilus",
    "Sean Kim",
    "Susanta Mozumder",//Check this name - Sushi
    "Yesenia"//Check this name
];



//Variable that stores the randomly chosen word
var currentWord = chooseWord();
console.log(currentWord);
//Array of letters of the currentWord
var letterArray = currentWord.split("");
console.log(letterArray);
//Stores Same as letterArray, but with underscores instead of letters
var hiddenWord = [];
//Calls on the function that replaces letters in letterArray with underscores
hideWord();
console.log(hiddenWord);
//Stores the event key
var letterInput
var booleanArray = [];

//object
console.log(booleanArray);

var board = {
    letterArray,
    hiddenWord,
    booleanArray
};

console.log(board);

//Randomly selects currentWord from classList array
function chooseWord(){
    i = Math.floor(Math.random() * classList.length);
    return(classList[i]);
}

//Function that replaces letters in letterArray with underscores
function hideWord() {
    for (i = 0; i < letterArray.length; i++){
        if (letterArray[i] !== ""){
            var underscores = letterArray[i].replace(/[A-Z]|[a-z]/g, "_");
            hiddenWord.push(underscores);
        }
        else {
            hiddenWord.push("");
        }
    }
}

//Takes the hiddenWord and returns it back to the HTML.
var playingField = document.getElementById("current-word");
playingField.textContent = board.hiddenWord.join("");






// Listens for pressed key and stores it into variable letterInput
document.onkeyup = function(){
    letterInput = event.key;
    for (i=0; i < letterArray.length; i++) {
            if (letterArray[i] === letterInput.toUpperCase() | letterArray[i] === letterInput.toLowerCase()) {
                console.log(playingField.textContent = letterArray[i]);
            }
            else {
                // console.log(hiddenWord[i]);
                console.log(playingField.textContent = hiddenWord[i]);
            }
        }
}



//STEPS
//Choose Word - DONE
//Split letters of word into array 1 - DONE
//Clone Array1 into Array2, which will replace everything with an underscore - DONE
//Clone Array3 that will capture bollean values "True and False"
//If the Array3[i] is true, then it will replace Array2[i] (of the same i value) with Array1[i] (of the same i value)


});

