function guess() {
	let user = parseInt(document.querySelector("input").value);
	let change = document.querySelector("p");
	let computerSecrate = parseInt(Math.random() * 100);
	let alphabets = true;

	if (user >= 100) {
		change.innerHTML = "Noo..!! Only Two Numbers";
	}  else if ( user > computerSecrate) {
		change.innerHTML = "Too Far";
	} else if (user === computerSecrate) {
		change.innerHTML = "Congratulation You Won";
	} else {
		change.innerHTML = "Too Close";
	}
}

function refresh() {
	let user = document.querySelector("input");
	let change = document.querySelector("p");

		user.value = "";
		change.innerHTML = "";

}