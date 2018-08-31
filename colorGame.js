var colors = generateRandomColors(6);
var reset = document.querySelector(".reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
//var button=document.querySelector(".button")
colorDisplay.textContent = pickedColor;
var hard = document.querySelector(".hard");
hard.addEventListener("click",function(){
window.location.reload();	
})
var easy = document.querySelector(".easy");
easy.addEventListener("click",function(){
	colors=generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.background = colors[i];
		var clickedColor = this.style.background;

		if(clickedColor === pickedColor) {
			h1.style.background="#232323";
}
}
	squares[3].style.background=squares[4].style.background=squares[5].style.background= "#232323";

})

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			reset.textContent = "Correct!";
			reset.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			//messageDisplay.textContent = "Try Again";
		}
	});
}
reset.addEventListener("click",function(){
	//colors = generateRandomColors(6);
window.location.reload();
})
	//.addEventListener("click",function(){
//window.location.reload();

//})
function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
		pickedColor = pickColor();
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
