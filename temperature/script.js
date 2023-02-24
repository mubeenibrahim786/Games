function check() {
	let inp = parseInt(document.querySelector("input").value);
	let change = document.querySelector("div");

	if (inp >= 37) {
		change.innerHTML = "Heat wave today.. Please take care off your self";
	} else if ((inp < 37) && (inp > 32)) {
		change.innerHTML = "Sunny day..!!";
	} else if ((inp < 33) && (inp > 26)) {
		change.innerHTML = "Normal Day";
	} else if ((inp < 27) && (inp > 15)){
		change.innerHTML = "Coooll..!!!";
	} else {
		change.innerHTML = "Freeeeez..!!";
	}
}

function reset() {
	let user = document.querySelector("input");
	let change = document.querySelector("div");

		user.value = "";
		change.innerHTML = "";

}