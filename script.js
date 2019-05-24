var wordLib = ["reindeer", "Jerusalem", "foreign", "espresso", "coconut"];
var chosenWord = "espresso"   // TODO: change to choose word randomly
var lettersGuessed = [];
var letterJail = [];  //incorrect letters guessed and displayed




function init(){

	console.log("hey");


	window.addEventListener("keyup", function(event){

		if (event.keyCode >= 65 && event.keyCode <= 90){
			var letter = String.fromCharCode(event.keyCode);
			console.log(letter);

			if (lettersGuessed.indexOf(letter) != -1){
				console.log("You already guessed that letter, buddy!")
			} else {
				lettersGuessed.push(letter)

				console.log(lettersGuessed)
			}



		} else {
			console.log("that's not a letter!")
		}

		
	})
}	


init()

