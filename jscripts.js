function calculateArea () {
	var num = true;
	document.getElementById("racArea").value = "";

	var aValue = parseFloat(document.getElementById("valueOfA").value);
	var bValue = parseFloat(document.getElementById("valueOfB").value);

	var element = document.getElementById("aValue").getElementsByTagName("div");
	if (element[0] != undefined) {
		document.getElementById("aValue").removeChild(element[0]);
	}
	var element = document.getElementById("bValue").getElementsByTagName("div");
	if (element[0] != undefined) {
		document.getElementById("bValue").removeChild(element[0]);
	}

	if (aValue <= 0) {
		var divBadValue = document.createElement("div");
		divBadValue.className = "errorDivElement";
		var error = document.createTextNode("* Wrong value !");
		divBadValue.appendChild(error);
		document.getElementById("aValue").appendChild(divBadValue);
		num = false;
	}
	if (bValue <= 0) {
		var divBadValue = document.createElement("div");
		divBadValue.className = "errorDivElement";
		var error = document.createTextNode("* Wrong value !");
		divBadValue.appendChild(error);
		document.getElementById("bValue").appendChild(divBadValue);
		num = false;
	}
	if (num == true) {
		var result = aValue + aValue + bValue + bValue;
		document.getElementById("racArea").value = result;
	}
}

function calculatePerimeter () {
	var num = true;
	document.getElementById("racPerimeter").value = "";

	var aValue = parseFloat(document.getElementById("valueOfA").value);
	var bValue = parseFloat(document.getElementById("valueOfB").value);

	var element = document.getElementById("aValue").getElementsByTagName("div");
	if (element[0] != undefined) {
		document.getElementById("aValue").removeChild(element[0]);
	}
	var element = document.getElementById("bValue").getElementsByTagName("div");
	if (element[0] != undefined) {
		document.getElementById("bValue").removeChild(element[0]);
	}

	if (aValue <= 0) {
		var divBadValue = document.createElement("div");
		divBadValue.className = "errorDivElement";
		var error = document.createTextNode("* Wrong value !");
		divBadValue.appendChild(error);
		document.getElementById("aValue").appendChild(divBadValue);
		num = false;
	}
	if (bValue <= 0) {
		var divBadValue = document.createElement("div");
		divBadValue.className = "errorDivElement";
		var error = document.createTextNode("* Wrong value !");
		divBadValue.appendChild(error);
		document.getElementById("bValue").appendChild(divBadValue);
		num = false;
	}
	if (num == true) {
		var result = aValue * bValue;
		document.getElementById("racPerimeter").value = result;
	}
}