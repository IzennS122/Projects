let x;

let y;
let z;

document.getElementById("rollButton").onclick = function () {
	document.getElementById("xLabel").innerHTML = "Dice : " + x;
	document.getElementById("yLabel").innerHTML = "Dice : " + y;
	document.getElementById("zLabel").innerHTML = "Dice : " + z;

	x = Math.floor(Math.random() * 10) + 1;
	y = Math.floor(Math.random() * 10) + 1;
	z = Math.floor(Math.random() * 10) + 1;
};
