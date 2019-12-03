var css = document.querySelector("h3");
var color1 = document.querySelector(".first");
var color2 = document.querySelector(".second");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

function displayCSS() {
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	displayCSS();
}

function setRandomGradient() {
	var firstRandomColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	var secondRandomColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	body.style.background = "linear-gradient(to right, " 
	+ firstRandomColor + ", " 
	+ secondRandomColor + ")";

	displayCSS();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
