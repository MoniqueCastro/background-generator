const css = document.querySelector("h3");
const color1 = document.querySelector(".first");
const color2 = document.querySelector(".second");
const body = document.getElementById("gradient");
const button = document.getElementById("button");

function displayCSS() {
	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	let firstRed = Math.floor(Math.random() * 256);
	let firstGreen = Math.floor(Math.random() * 256);
	let firstBlue = Math.floor(Math.random() * 256);
	let firstRandomColor = "rgb(" + firstRed + ", " + firstGreen + ", " + firstBlue + ")";
	let secondRed = Math.floor(Math.random() * 256);
	let secondGreen = Math.floor(Math.random() * 256);
	let secondBlue = Math.floor(Math.random() * 256);
	let secondRandomColor = "rgb(" + secondRed + ", " + secondGreen + ", " + secondBlue + ")";
	body.style.background = "linear-gradient(to right, " 
	+ firstRandomColor + ", " 
	+ secondRandomColor + ")";

	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	  }
	  
	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	color1.value = rgbToHex(firstRed, firstGreen, firstBlue);
	color2.value = rgbToHex(secondRed, secondGreen, secondBlue);

	displayCSS();
}

button.addEventListener("click", setRandomGradient);
