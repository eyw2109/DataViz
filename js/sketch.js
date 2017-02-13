var myFirstVariable = 20;
var mysecondVariable = 35;
var myName = "Eric's car";
var amIamerican = true;
var numbers = [12, 214, 523.645, 86];
var myObject = {name:"Eric", lastName: "Wong", age: "34", columbian: false}
var x5 = "not mystery value"
var circlesSize = 50;

function myFirstFunction (x1, x2, x3){
	var x5 = "mystery value...";
	print(x5);
	var x4 = x1*x2*x3;
	return x4;
}
// function preload(){

// }

function setup(){
	// var mythirdVariable = myName + myFirstVariable + mysecondVariable;
	// print(mythirdVariable);
	// print(typeof (amIamerican));
	// print(numbers [0]);
	// print(myObject['name']);

	// print(myFirstFunction (2, 4, 5));

	createCanvas(800,500);
	// for (var i =0; i < 100; i++){
	// 	print(i);
	// }
	var i = 0;
	while (i < 100){
		print(i);
		i++
	}
}

function draw(){
	background (0, 100, 100);

	if (mouseIsPressed){
		fill(255);
	}
	else {
		fill(0)
	}

	stroke(200, 0, 50);
	strokeWeight(1);
	ellipse(mouseX, mouseY, circlesSize);


}