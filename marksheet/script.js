function showMarkSheet() {
	let rollNumInp = document.querySelector("input").value;
	let changeEle = document.querySelector(".marksheet-div");
	let rollNum = "TK-18006";
	if (rollNumInp === rollNum) {
		changeEle.innerHTML = "<h1>"+"Talha Abbas"+"</h1>";	
		changeEle.innerHTML += "<hr>";
		changeEle.innerHTML += "<br>" + "<h4>" + "html = 85 " + "</h4>";
		changeEle.innerHTML += "<h4>" + "CSS = 90  " + "</h4>";
		changeEle.innerHTML += "<h4>" + "JavaScript = 80 " + "</h4>";
		changeEle.innerHTML += "<br>" + "<h2>" + "Total = 255 out of 300" + "</h2>";
		changeEle.innerHTML += "<h3>" + "percentage 85.00% " + "</h3>";
		changeEle.innerHTML += "<h3>" + "Grade 'A' " + "</h3>";
		changeEle.innerHTML += "<h3>" + "Remarks 'Excellent work' " + "</h3>";
		

	} else if (rollNumInp === "") {
		changeEle.innerHTML = "<h1>"+"Enter a Roll Number"+"</h1>";
		
	} else {
		changeEle.innerHTML ="<h1>"+"Roll Number Could Not Found "+"</h1>";
	}
}
function refresh() {
	let rollNumInp = document.querySelector("input");
	let changeEle = document.querySelector(".marksheet-div");
	rollNumInp.value = "";
	changeEle.innerHTML = "";

}
