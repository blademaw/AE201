console.log("working.");

$("#darkBtn").click(function() {
	$("body").css("background-color", "black");
	$(".menu").css("color", "white")
	$("#meme").css("color", "white")
})

$("#lightBtn").click(function() {
	$("body").css("background-color", "white");
	$(".menu").css("color", "black")
	$("#meme").css("color", "black")
})