var testPattern = function() {
	var display = document.getElementById("output");

	var createDivs = function() {
		var output = '';
		var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
		for (var i = 0; i < alphabet.length; i++) {
			output += '<div class="letter ' + alphabet[i] + '"></div>';
			if ((i + 1) % 6 === 0) output += "<br />";
		}
		return output;
	}

	display.innerHTML += createDivs();
}