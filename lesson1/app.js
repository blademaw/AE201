console.log("working.")

// Declaring DOM objects at the top
var para1 = document.getElementById('p1');
var para2 = document.getElementById('p2');
var batman = para1.nextElementSibling;
var superman = para2.previousElementSibling;

// Click to change to light greybackgorund-colour
para1.onclick = function() {
	if (para1.style.backgroundColor != 'blue') {
		para1.style.backgroundColor = 'blue';
	} else {
		para1.style.backgroundColor = 'turquoise';
	}
	
}

// Change "Rename Me" to switch between two different strings
para2.onclick = function () {
	if(para2.innerHTML != "Clark Kent"){
		para2.innerHTML = "Clark Kent"
	} else {
		para2.innerHTML = "Superman"
	}
}

// Change the backgorund image on lcick
var batmanToggle = 1;
batman.onclick = function() {
	if (batmanToggle == 1){
		batman.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/GothamCity1.jpg/250px-GothamCity1.jpg')";
		batmanToggle = 0;
	} else if (batmanToggle == 0) {
		batman.style.backgroundImage = "url('http://vignette3.wikia.nocookie.net/mkwikia/images/8/88/Bat_Cave_(MK_vs._DC_Universe).jpg/revision/latest?cb=20110506172716')";
		batmanToggle = 1;	
	}
}