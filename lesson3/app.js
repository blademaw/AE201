console.log("still working. :p");
var total = 0;

$("#total").text("Total Score: " + total);

for(var i=0; i<16; i++) {
	var	wilson = document.createElement("img");
	wilson.setAttribute("src","http://vignette3.wikia.nocookie.net/dont-starve-game/images/7/78/Wilson.png/revision/20131129230748");
	wilson.className = "wilson " + i;
	var box = document.createElement("div");
	box.className = "box " + i;
	box.appendChild(wilson);
	document.getElementById("map").appendChild(box);
}

// create a random number
var guesses = 0;
var position = Math.floor(Math.random() * 16);

$("#score").text("Guesses: " + guesses);

// when a box is clicked
// check where the number matches position

$(".box").click(function () {
	guesses++;
	$("#score").text("Guesses: " + guesses);
	// checking if position == clicked box
	if ($(this).hasClass(position)) {
		$(this).children().fadeIn();
		total++;
		$("#total").text("Total Score: " + total);
	}
})

// When "hide" button click, hide Wilson again
$("button").click(function () {
	$("img").fadeOut();
	position = Math.floor(Math.random() * 16);
	guesses = 0;
	$("#score").text("Guesses: " + guesses);
	$("#total").text("Total Score: " + total);

})



