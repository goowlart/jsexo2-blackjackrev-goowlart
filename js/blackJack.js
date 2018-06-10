function formGame() {
		var youNamber = document.getElementById("younamber").value;



function getRandomizer(bottom, top) {
return function() {
 return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}
}


var rollDie = getRandomizer( 0, 10 );

var results = ""
for ( var i = 0; i<1; i++ ) {
results += rollDie() + " ";
       document.getElementById("machineNumber").innerHTML = results;
}

	if (document.getElementById("younamber").value > results) {
		       porra = "=)  Good Job";

	} else {
		       porra = "=/  Try Again";
	}

	document.getElementById("finalResult").innerHTML = porra;
}
