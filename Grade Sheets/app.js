let english;
let science;
let mathematics;
let filipino;
let it;

document.getElementById("submit-button").onclick = function () {
	english = document.getElementById("english").value;
	english = Number(english);

	science = document.getElementById("science").value;
	science = Number(science);

	mathematics = document.getElementById("mathematics").value;
	mathematics = Number(mathematics);

	filipino = document.getElementById("filipino").value;
	filipino = Number(filipino);

	it = document.getElementById("it").value;
	it = Number(it);

	console.log(english);
	console.log(science);
	console.log(mathematics);
	console.log(filipino);
	console.log(it);

	document.getElementById("english-grade").innerHTML = english;
	document.getElementById("science-grade").innerHTML = science;
	document.getElementById("math-grade").innerHTML = mathematics;
	document.getElementById("filipino-grade").innerHTML = filipino;
	document.getElementById("it-grade").innerHTML = it;

	switch (english) {
		case 98:
		case 99:
		case 100:
			document.getElementById("english-transmutted-grade").innerHTML = 1;
			break;

		case 95:
		case 96:
		case 97:
			document.getElementById(
				"english-transmutted-grade"
			).innerHTML = 1.25;
			break;

		case 92:
		case 93:
		case 94:
			document.getElementById(
				"english-transmutted-grade"
			).innerHTML = 1.5;
			break;

		case 89:
		case 90:
		case 91:
			document.getElementById(
				"english-transmutted-grade"
			).innerHTML = 1.75;
			break;

		case 86:
		case 87:
		case 88:
			document.getElementById("english-transmutted-grade").innerHTML = 2;
			break;

		case 83:
		case 84:
		case 85:
			document.getElementById(
				"english-transmutted-grade"
			).innerHTML = 2.25;
			break;

		case 79:
		case 80:
		case 81:
		case 82:
			document.getElementById(
				"english-transmutted-grade"
			).innerHTML = 2.5;
			break;

		case 76:
		case 77:
		case 78:
			document.getElementById(
				"english-transmutted-grade"
			).innerHTML = 2.75;
			break;

		case 75:
			document.getElementById("english-transmutted-grade").innerHTML = 3;
			break;
		default:
			document.getElementById("english-transmutted-grade").innerHTML = 5;
			document.getElementById("english-transmutted-grade").style.color =
				"red";
	}

	switch (science) {
		case 98:
		case 99:
		case 100:
			document.getElementById("science-transmutted-grade").innerHTML = 1;
			break;

		case 95:
		case 96:
		case 97:
			document.getElementById(
				"science-transmutted-grade"
			).innerHTML = 1.25;
			break;

		case 92:
		case 93:
		case 94:
			document.getElementById(
				"science-transmutted-grade"
			).innerHTML = 1.5;
			break;

		case 89:
		case 90:
		case 91:
			document.getElementById(
				"science-transmutted-grade"
			).innerHTML = 1.75;
			break;

		case 86:
		case 87:
		case 88:
			document.getElementById("science-transmutted-grade").innerHTML = 2;
			break;

		case 83:
		case 84:
		case 85:
			document.getElementById(
				"science-transmutted-grade"
			).innerHTML = 2.25;
			break;

		case 79:
		case 80:
		case 81:
		case 82:
			document.getElementById(
				"science-transmutted-grade"
			).innerHTML = 2.5;
			break;

		case 76:
		case 77:
		case 78:
			document.getElementById(
				"science-transmutted-grade"
			).innerHTML = 2.75;
			break;

		case 75:
			document.getElementById("science-transmutted-grade").innerHTML = 3;
			break;
		default:
			document.getElementById("science-transmutted-grade").innerHTML = 5;
			document.getElementById("science-transmutted-grade").style.color =
				"red";
	}

	switch (mathematics) {
		case 98:
		case 99:
		case 100:
			document.getElementById("math-transmutted-grade").innerHTML = 1;
			break;

		case 95:
		case 96:
		case 97:
			document.getElementById("math-transmutted-grade").innerHTML = 1.25;
			break;

		case 92:
		case 93:
		case 94:
			document.getElementById("math-transmutted-grade").innerHTML = 1.5;
			break;

		case 89:
		case 90:
		case 91:
			document.getElementById("math-transmutted-grade").innerHTML = 1.75;
			break;

		case 86:
		case 87:
		case 88:
			document.getElementById("math-transmutted-grade").innerHTML = 2;
			break;

		case 83:
		case 84:
		case 85:
			document.getElementById("math-transmutted-grade").innerHTML = 2.25;
			break;

		case 79:
		case 80:
		case 81:
		case 82:
			document.getElementById("math-transmutted-grade").innerHTML = 2.5;
			break;

		case 76:
		case 77:
		case 78:
			document.getElementById("math-transmutted-grade").innerHTML = 2.75;
			break;

		case 75:
			document.getElementById("math-transmutted-grade").innerHTML = 3;
			break;
		default:
			document.getElementById("math-transmutted-grade").innerHTML = 5;
			document.getElementById("math-transmutted-grade").style.color =
				"red";
	}

	switch (filipino) {
		case 98:
		case 99:
		case 100:
			document.getElementById("filipino-transmutted-grade").innerHTML = 1;
			break;

		case 95:
		case 96:
		case 97:
			document.getElementById(
				"filipino-transmutted-grade"
			).innerHTML = 1.25;
			break;

		case 92:
		case 93:
		case 94:
			document.getElementById(
				"filipino-transmutted-grade"
			).innerHTML = 1.5;
			break;

		case 89:
		case 90:
		case 91:
			document.getElementById(
				"filipino-transmutted-grade"
			).innerHTML = 1.75;
			break;

		case 86:
		case 87:
		case 88:
			document.getElementById("filipino-transmutted-grade").innerHTML = 2;
			break;

		case 83:
		case 84:
		case 85:
			document.getElementById(
				"filipino-transmutted-grade"
			).innerHTML = 2.25;
			break;

		case 79:
		case 80:
		case 81:
		case 82:
			document.getElementById(
				"filipino-transmutted-grade"
			).innerHTML = 2.5;
			break;

		case 76:
		case 77:
		case 78:
			document.getElementById(
				"filipino-transmutted-grade"
			).innerHTML = 2.75;
			break;

		case 75:
			document.getElementById("filipino-transmutted-grade").innerHTML = 3;
			break;
		default:
			document.getElementById("filipino-transmutted-grade").innerHTML = 5;
			document.getElementById("filipino-transmutted-grade").style.color =
				"red";
	}
	switch (it) {
		case 98:
		case 99:
		case 100:
			document.getElementById("it-transmutted-grade").innerHTML = 1;
			break;

		case 95:
		case 96:
		case 97:
			document.getElementById("it-transmutted-grade").innerHTML = 1.25;
			break;

		case 92:
		case 93:
		case 94:
			document.getElementById("it-transmutted-grade").innerHTML = 1.5;
			break;

		case 89:
		case 90:
		case 91:
			document.getElementById("it-transmutted-grade").innerHTML = 1.75;
			break;

		case 86:
		case 87:
		case 88:
			document.getElementById("it-transmutted-grade").innerHTML = 2;
			break;

		case 83:
		case 84:
		case 85:
			document.getElementById("it-transmutted-grade").innerHTML = 2.25;
			break;

		case 79:
		case 80:
		case 81:
		case 82:
			document.getElementById("it-transmutted-grade").innerHTML = 2.5;
			break;

		case 76:
		case 77:
		case 78:
			document.getElementById("it-transmutted-grade").innerHTML = 2.75;
			break;

		case 75:
			document.getElementById("it-transmutted-grade").innerHTML = 3;
			break;
		default:
			document.getElementById("it-transmutted-grade").innerHTML = 5;
			document.getElementById("it-transmutted-grade").style.color = "red";
			break;
	}
};
