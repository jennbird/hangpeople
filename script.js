init()

function init(){

	console.log("hey");


	window.addEventListener("keyup", function(event){

		if (event.keyCode >= 65 && event.keyCode <= 90){
			var letter = String.fromCharCode(event.keyCode);
			console.log(letter);
		} else {
			console.log("that's not a letter!")
		}

		
	})
}	
