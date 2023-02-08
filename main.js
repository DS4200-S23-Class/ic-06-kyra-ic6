function submitClicked() {
	let vals = document.getElementsByTagName("input");
	for(let i  =0; i < vals.length; i++) {
		console.log(vals.length);
		if(vals[i].checked) {
			//update filler
			let newText = "Selected Vis: " + vals[i].value;
			document.getElementById("selected-vis").innerHTML = newText;
		}
	}
}

document.getElementById("subButton").addEventListener('click', submitClicked);

(function() {
	console.log("my anonymous function");
})();