
///////////////////////////////////////////

/*
Basic Objects
*/

// number object
var a = 1;
console.log(typeof a); // number

// string object
var b = "hello!";
console.log(typeof b); // string

// bool object
var c = true;
console.log(typeof c); // boolean

// object literal
var c = { firstName: 'Bob', lastName: 'Smith'};
console.log(typeof d); // object

// array of numbers
var e = [1, 2, 8, 9];
console.log(typeof e); // object
console.log(typeof e[0]); // number

// array of strings
var f = ["sun", "moon", "stars"];
console.log(typeof f); // object
console.log(typeof f[0]); // string

// array of mixed object types
var f = ["sun", 7, { size: "big", weight: "heavy"}];
console.log(typeof f); // object
console.log(typeof f[0]); // string
console.log(typeof f[1]); // number
console.log(typeof f[2]); // object

// add a property on to an object using . notation
var g = {};
g.name = "Bob";
console.log(g.name); // "Bob"

// add a property on to an object using [""], which allows whitespacs (though not recommended notation)
g["birth location"] = "San Francisco";
console.log(g["birth location"]); // "San Francisco"

// we can imitatie an associative array by doing this:
var h = {};

h["One"] = {number: 1, japanese: "ichi"};
h["Two"] = {number: 2, japanese: "ni"};
h["Three"] = {number: 3, japanese: "san"};
h["Four"] = {number: 4, japanese: "shi"};

var numbers = ["One", "Two", "Three", "Four"];

for (var i = 0; i < numbers.length; i++) {
	console.log(h[numbers[i]].japanese); // "ichi" "ni" "san" "shi"
}


///////////////////////////////////////////

/*
Prototypes!
Prototypes allow javascript to use constructors to define objects that come with certain properties and methods by default.
*/
console.log("~~~~~ Learning about Prototype! ~~~~~")

// Default constructor.  squareFooting and price can be passed in as optional parameters.  If they are missing,
// some default values are assigned in their place.
function House(squareFooting, price) {
  this.squareFooting = squareFooting || 2000;
  this.rooms = [];
  this.price = price || 100000;
}


var house1 = new House();
console.log(house1); // {squareFooting: 2000, rooms: Array[0], price: 100000}

var house2 = new House(5000, 200000);
console.log(house2); // {squareFooting: 5000, rooms: Array[0], price: 200000}

// Now we want the House object to have another property with a default value, but we don't want to
// go back through and update every object one by one!  We can use prototype to add another property:
House.prototype.yardSquareFooting = 8000;

console.log(house1.yardSquareFooting); // 8000
console.log(house2.yardSquareFooting); // 8000

// We can also add shared methods on to these prototypes.  Both house1 and house 2 have the
// House prototype, so both can call the method below.
House.prototype.getCostPerSquareFoot = function() {
  return this.price / this.squareFooting;
};

var house1CostPerDquareFoot = house1.getCostPerSquareFoot();
console.log(house1CostPerDquareFoot); // 50

var house2CostPerDquareFoot = house2.getCostPerSquareFoot();
console.log(house2CostPerDquareFoot); // 40

// prototypes can inherit other prototypes, adding all of the functionality of the extended
// prototype to their own:
function Victorian() {
	this.style = 'Victorian style';
}

Victorian.prototype = new House (40000, 5000000);

var victorian = new Victorian(); 
console.log(victorian.style); // 'Victorian style'
console.log(victorian.getCostPerSquareFoot()); // 125 

console.log(house1.style); // undefined
