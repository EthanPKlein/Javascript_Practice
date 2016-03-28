console.log("Hello World!");

// object literal
var car = {
	wheelCount: 4,
	seats: {
		frontLeft: "empty",
		frontRight: "empty",
		backLeft: "empty",
		backRight: "empty"
	},
	passeners: [
		"Bob",
		"Anne"
	]
};

console.log(car);

// function object
var greeter = function(firstName, lastName) {
	return "Hello, " + firstName + " " + lastName + ".  You are number " + Math.floor(Math.random()*25) + ".";
}

console.log(greeter("Tom","Carpenter"));
console.log(greeter("Chris","Christenson"));