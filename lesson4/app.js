console.log("suhh");

var tog = 0;

$("#macBar img").hover(
	function () {
		$(this).animate({top: "-20"});
		$(this).animate({top: "0"});
		$("#macScreen").fadeIn("slow")
		tog = 1
	}
)

$("#but").click(
	function() {
		if (tog == 0) {
			$("#one").animate({left: "400px"})
			$("#two").animate({left: "300px"})
			$("#three").animate({left: "200px"})
			$("#four").animate({left: "100px"})
			$("#five").animate({left: "0px"})
			tog = 1
		} else if (tog == 1) {
			$("#one").animate({left: "0px"})
			$("#two").animate({left: "100px"})
			$("#three").animate({left: "200px"})
			$("#four").animate({left: "300px"})
			$("#five").animate({left: "400px"})
			tog = 0
		}
	}
)

$("#macBar img").click(function() {
	$(this).animate({height: "160px", width: "160px"})
	$(this).animate({height: "80px", width: "80px"})
})

$("#macScreen").click(
	function() {
		$(this).fadeOut("slow");
	}
)