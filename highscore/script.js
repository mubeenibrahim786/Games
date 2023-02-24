function check() {
	let highScore = parseInt(Math.random() * 1000);
	let userScore = parseInt(document.querySelector("input").value);
	let changeEle = document.querySelector("div");
	if (userScore > highScore) {
		changeEle.innerHTML = ("Congratulations..!!" + "You Beat Computer. Your Score " + userScore + "<br>" + "Computer Score " + highScore);
	} 
	else if (userScore === highScore) {
		changeEle.innerHTML = ("you just need 1 to beat highScore" + "<br>" + "your Score " + userScore + "<br>" + "highScore " + highScore );
	} else if ( userScore < highScore) {
		changeEle.innerHTML = ("you need " + (highScore - userScore + 1) + " to beat Computer'Score" + " Try Again.. You can Do it..!!");
	} else if (userScore = "" === "") {
		changeEle.innerHTML = "Ooppss You Score Zero..!!";
	}
}