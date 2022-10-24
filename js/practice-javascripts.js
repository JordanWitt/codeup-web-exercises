"use strict"
//Starting with the basics/fundementals
console.log("hello world");

/*  primative types/value types:
    strings
    number
    boolean
    undefined
    null
 */

//Variables
let name = "Jordan"; //String literal
console.log(name);
let age = 28; // Number literal
let isApproved = true;// Boolean literal
let fName = undefined;
let lName = null; // situations to clear the value of a variable


//exaple of let vs const. Let allows reassign, const stays the same
const interestRate = 0.3;
// interestRate = 1;// cannot be changed, interstRate has const of 0.3 causes error in log
console.log(interestRate);

/* Reference Types:
   Objects
   Arrays
   Functions
 */

// Dealing with multiple variables? Store those inside of object: examples
let person = {
    name: "Jordan",
    age: 28
};// curly brackets called object literal contating contents for person;
// accessing the name property to change the name using DOT NOTATION or BRACKET NOTATION
person.name = "Jaba"; // dot notation
person['age'] = 40; // bracket notation
console.log(person.age);// can also use the dot notation to log just the property you want/ .name .age

//Adding some variable with functions
let firstName = "Jordan";
let lastName = " Witt";
let fullName = function (){
    let fullName = firstName + lastName
    return fullName
}
console.log(fullName());
console.log(person);
console.log(fullName());

//arrays
let selectedColors = ['red', 'blue']; //square brackets empty array;
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors.length);//returns how many items/elemtents in the array (4)

//functions
function greet(name, lastName) {  //the parameters
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Jordan', 'Witt');// arugument supplied to that parameter
// calc funtions
function square(number){
    return number * number;
}
console.log(square(2));



