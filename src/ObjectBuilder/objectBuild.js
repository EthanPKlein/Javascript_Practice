'use strict';

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

// creating base object with keyword new
var company =  new Object();
company.name = "Bob's Steamroller Emporium";
company.annualIncome = 5000000;
company.employeeCount = 210;

company.calculateAnnualIncomePerEmployee = function() {
	return this.annualIncome / this.employeeCount;
}

console.log(company);
console.log(company.calculateAnnualIncomePerEmployee());

