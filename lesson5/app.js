// console.log("working.");

var allTags = [];

function addTag() {
	// if input empty
	if ($("#tagInputs").val() != "") {
		// create a container for a new row
		var newCon = document.createElement("div");
		// create a new div to denote the actual item
		var newTag = document.createElement("div");
		// change newTag's text to be same as user input
		newTag.innerHTML = $("input[name=tag]").val();
		// add a class to use Materialize CSS
		$(newTag).addClass("waves-effect waves-light btn");
		// append the item into the container
		$(newCon).append(newTag);

		// create a div for the delete button
		var box = document.createElement("div");
		box.innerHTML = "X";
		// add a class to use Materialize styling
		$(box).addClass("btn-floating waves-effect waves-light red");
		// append the delete button to the container
		$(newCon).append(box);
		// add a class to allow for CSS
		$(newCon).addClass("tags");

		// add the container to the actual page
		$("input").before(newCon);
		// push the input value into our array
		allTags.push($("input[name=tag]").val());
		$("input").val("");

		// create an onclick event for the new button
		$(box).on("click", function() {
			// get the index for the deleted item
			var index = allTags.indexOf($(this).prev().html());
			// remove the element in the index
			allTags.splice(index, 1);
			// remove the container from our HTML
			$(this).parent().remove();

		})
	} else {
		alert("Please enter a valid string; empty/null cannot be parsed.");
	}
}