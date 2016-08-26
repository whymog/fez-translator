var startZoom = 5,
	currentZoom = startZoom;

function init() {
	var shrinkBtn = document.getElementById("shrink"),
		expandBtn = document.getElementById("expand");

	console.log(shrinkBtn);
	console.log(typeof shrinkBtn);

	shrinkBtn.addEventListener('click', function() {
		if (currentZoom === 1) return;
		console.log("clicked shrink btn");
		var letters = document.getElementsByClassName("letter");

		currentZoom --;
		if (letters.length) {
			for (var i = 0; i < letters.length; i++) {
				
				letters[i].style.zoom = currentZoom;
			}
		}
		console.log(currentZoom);
	});

	expandBtn.addEventListener('click', function() {
		console.log("clicked expand btn");
		var letters = document.getElementsByClassName("letter");

		currentZoom ++;
		if (letters.length) {
			for (var i = 0; i < letters.length; i++) {
				
				letters[i].style.zoom = currentZoom;
			}
		}
		console.log(currentZoom);
	});

	testPattern();
}

window.onload = init;