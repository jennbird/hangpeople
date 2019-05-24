var wordLib = ["reindeer", "Jerusalem", "foreign", "espresso", "coconut"];
var chosenWord = "espresso"   // TODO: change to choose word randomly
var lettersGuessed = [];
var letterJail = [];  //incorrect letters guessed and displayed




function init(){

	console.log("hey");


	window.addEventListener("keyup", function(event){

		if (event.keyCode >= 65 && event.keyCode <= 90){
			var letter = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(letter);

			if (lettersGuessed.indexOf(letter) != -1){
				console.log("You already guessed that letter, buddy!")
			} else {
				lettersGuessed.push(letter)

				drawWord();
			}



		} else {
			console.log("that's not a letter!")
		}

		
	})
}	

function drawWord(){

	var currentlyGuessedWord = "";


	for(var i = 0; i < chosenWord.length; i++){
		if (lettersGuessed.indexOf(chosenWord[i]) == -1 ){
			currentlyGuessedWord += "_ ";
		} else {
			currentlyGuessedWord += chosenWord[i] + " ";
		}
	}

	console.log(currentlyGuessedWord);
}

init()

