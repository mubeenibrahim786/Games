let count = 0;
function ask() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "<br>" + "<br>" + "<p>" + "Read Carefully..!!" + "</p>" +"Q1 = Guess the output ??" + "<br>"
	 + "<br>" + "(2===2)" + "<br>" + "True Or False" + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp inputGroup-sizing-default'  class=' my-inp input-group-text my-inp' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='submit()'>" +
	   "Submit" + "</button>" + "<br>" + "<button  type='button' class='my-btn btn btn-secondary btn-lg' onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submit() {
	let changeEle = document.querySelector(".show");
	let right = "True";
	let wrong = "";
	let userAns = document.querySelector(".input-group-text").value;
	if (userAns === "True") {
		count++;
		// changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML = "<button type='button' class=' my-btn btn btn-secondary btn-lg' onclick='nextQues()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "<button type='button' class=' my-btn btn btn-secondary btn-lg' onclick='nextQues()'>" + "Next Question" + "</button>";

	}
}
function refresh() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";

}
function nextQues() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";
	changeEle.innerHTML += "<br>" + "<p>" + "Read Carefully..!!" + "</p>" + "<br>" +"Q2 = Guess the output ??" + "<br>"
	 + "<br>" + "((50 < 90) && (60 > 70))" + "<br>" + "True Or False" + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp inputGroup-sizing-default' class='my-inp input-group-text' placeholder='Answer'>"
	  + "<br>" + "<br>" + "<br>" + "<button type='button' class=' my-btn btn btn-secondary btn-lg' onclick='submitTwo()'>" +
	   "Submit" + "</button>" + "<br>" + "<button type='button' class=' my-btn btn btn-secondary btn-lg' onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submitTwo() {
	let changeEle = document.querySelector(".show");
	let right = "False";
	let wrong = "";
	let userAns = document.querySelector(".input-group-text").value;
	if (userAns === "False") {
		count++;
		// changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML = "<br>" + "<button type='button' class=' my-btn btn btn-secondary btn-lg' onclick='nextQuesThree()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='nextQuesThree()'>" + "Next Question" + "</button>";
		
	}
}
function nextQuesThree() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";
	changeEle.innerHTML += "<br>" + "<p>" + "Read Carefully..!!" + "</p>" + "<br>" +"Q3 = Guess the output ??" + "<br>"
	 + "<br>" + "((30 > 40) || (50 < 90))" + "<br>" + "True Or False" + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp inputGroup-sizing-default' class='my-inp input-group-text' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='submitThree()'>" +
	   "Submit" + "</button>" + "<br>" + "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submitThree() {
	let changeEle = document.querySelector(".show");
	let right = "True";
	let wrong = "";
	let userAns = document.querySelector(".input-group-text").value;
	if (userAns === "True") {
		count++;
		// changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML = "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='nextQuesFour()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='nextQuesFour()'>" + "Next Question" + "</button>"; 
		
	}
}
function nextQuesFour() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";
	changeEle.innerHTML += "<br>" + "<p>" + "Read Carefully..!!" + "</p>" + "<br>" +"Q4 = Guess the output ??" + "<br>"
	 + "<br>" + "(30 === 30) || ((50 < 49) && (70 < 71))" + "<br>" + "True Or False" + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp inputGroup-sizing-default' class=' my-inp input-group-text' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='submitFour()'>" +
	   "Submit" + "</button>" + "<br>" + "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submitFour() {
	let changeEle = document.querySelector(".show");
	let right = "True";
	let wrong = "";
	let userAns = document.querySelector(".input-group-text").value;
	if (userAns === "True") {
		count++;
		// changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML = "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='nextQuesFive()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='nextQuesFive()'>" + "Next Question" + "</button>"; 
		
	}
}
function nextQuesFive() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";
	changeEle.innerHTML += "<br>" + "<p>" + "Read Carefully..!!" + "</p>" + "<br>" +"Q5 = What console print ??" + "<br>"
	 + "<br>" + "if (50 > 30) {" + "<br>" + "console.log('Happy');" + "<br>" + "} else {" + "<br>" + "console.log('Sad');" + "<br>" + "}" + "<br>"  + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp inputGroup-sizing-default' class=' my-inp input-group-text' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='submitFive()'>" +
	   "Submit" + "</button>" + "<br>" + "<button type='button' class='my-btn btn btn-secondary btn-lg' onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submitFive() {
	let changeEle = document.querySelector(".show");
	let right = "Happy";
	let wrong = "";
	let userAns = document.querySelector(".input-group-text").value;
	if (userAns === "Happy") {
		count++;
		changeEle.innerHTML = "Right Answer";
		// changeEle.innerHTML += "<br>" + "<button onclick='nextQuesFive()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	changeEle.innerHTML = "you got"+ " " + count + " " + "out of 5";
} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
	changeEle.innerHTML = "you got"+ " " + count + " " + "out of 5";
		// changeEle.innerHTML = "Wrong Answer" + "<br>" + "Try Again"; 
		
	}
}