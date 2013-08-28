// Add description of the script
var scriptDescription=
"Currently Testing Basic JavaScript"; 

// Add Console log describing this script
console.log("Hello World. \nCurrently Testing "+ scriptDescription +".") ;

var describeTest = function (scriptDescription) {
	console.log("\nCurrently Testing "+ scriptDescription +".");
}
/*

// Ask the User for his/her name
var name=prompt("What is your name?");
alert("Hello "+name);

// Show variable assignment 
var user = name;
console.log("\nThe current user = "+user);

// Testing Control Statements
scriptDescription="Control Statements: IF/Else If"; 
console.log("\nCurrently Testing "+ scriptDescription +".");

var condition = prompt("Control Statement? ");
if (condition=="if") {
	console.log("You've selected the IF branch");
} else if (condition=="elseif"){
	console.log("You've selected the ELSEIF branch");	
} else {
	console.log("You've provided invalid input");
}

// While Loops
scriptDescription="Control Structures: While Loops"; 
console.log("\nCurrently Testing "+ scriptDescription +".");

var tempIndex = 0;
var numberOfLoops = 10;

console.log("This Page will Self-Destruct in: \n"); // Initialize Countdown Sequence

while (tempIndex<numberOfLoops) {
	var dots="";
	var n=0;
	var count=numberOfLoops-tempIndex;
	while (n<count){
		dots += ".";
		n++;
	}
	console.log(count+dots);
	tempIndex++;
}

console.log("\nBOOOMM!!!!!!\n");

// For Loop
scriptDescription="Control Statements: For Loops"; 
console.log("\nCurrently Testing "+ scriptDescription +".");

var Things= new Array(0,1,2,3);

for (var i = Things.length - 1; i >= 0; i--) {
	console.log(Things[i]);
};

// Arrays
scriptDescription="Arrays"; 
console.log("\nCurrently Testing "+ scriptDescription +".");

var friends = ["me","Nathan","Jonathan","Han"];
console.log("Heres the array\n");
console.log(friends);
console.log(friends.length);
for (var i = 0; i < friends.length; i++) {
	console.log(friends[i]);
	}

// OBJECTS
scriptDescription="OBJECTS"; 
console.log("\nCurrently Testing "+ scriptDescription +".");

var me = {
	first_name: "Jonathan",
	last_name: "Pham",
	address: "44422 Parkmeadow Dr.",
	city: "Fremont",
	state: "CA",
	zip_code: 94539,
}

console.log(me.first_name); // Grabbing variables using its literal key
console.log(me["last_name"]); // Grabbing a value using its subscript key string

*/

// FUNCTIONS
describeTest("FUNCTIONS");

var hello_types=["Hola!","Bonjour","Konichi wa","Hello World!"];
var hello = hello_types[hello_types.length-1];


// sayHello shall say Hello in the console
var sayHello = function() {
	console.log(hello);
}

for (var i = 0; i < hello_types.length; i++) {
	hello=hello_types[i];
	sayHello();
};


