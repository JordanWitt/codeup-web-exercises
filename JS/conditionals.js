"use strict";
console.log("this is a sanity check");
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
    // Create a function named analyzeColor and let the input be a string of a color
    // Create a return message that related to the color chosen (using if else)
function analyzedColor(colorName){
    if(colorName == "yellow"){
        return "yellow, the color of...eh"
    }else if(colorName == "blue"){
        return "blue, also the color of eh"
    }else if(colorName == "cyan"){
        return "CYAN! A little less eh but still eh"
    }
}
console.log(analyzedColor("yellow"));
console.log(analyzedColor("bluw"));
console.log(analyzedColor("yellow"));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("so random these colors are" + analyzedColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzedColor(chooseColor){
    let analyzedColor=(prompt("Pick a color"));
    switch (chooseColor){
        case "red" :
            alert("red is bland");
            break;
        case "blue" :
            alert("blue is also eh");
            break;
        case "cyan" :
            alert("cyan is the most ehish");
            break;
        default:
            return " I don't like " + chooseColor + " because it's a stankin color";
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
// prompt the user to enter in a color
// pass input to analyzed color function


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// write a funcion named calculatedTotal
//input is a lucky number and total amount
//return discount price
function calculatedTotal(luckyNumber, totalAmount){
    if (luckyNumber === 0) {
        return "Sorry you do not have a discout " + totalAmount;
    }else if (luckyNumber == 1) {
        return "10 percent discount and total is now " + (totalAmount - totalAmount * .10).toFixed(2);
    }else if (luckyNumber == 2) {
        return "25percent discount and total is now " + (totalAmount - totalAmount * .25).toFixed(2);
    }else if (luckyNumber == 3) {
        return "35 percent discount and total is now " + (totalAmount - totalAmount * .35).toFixed(2);
    }else if (luckyNumber == 4) {
        return "50 percent discount and total is now " + (totalAmount - totalAmount * .50).toFixed(2);
    }else if (luckyNumber == 5) {
        return "100 percent discount and your total is " + 0;
    }else{
        return "Your lucky number needs to be between 0-5"
    }
}
//console.log(alert(calulatedTotal(6,100)));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
// prompt uder for total bill
let total = (prompt("What is the total of your bill?"));


console.log(alert(calculatedTotal( luckyNumber , total)));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// let "enterNumber" confirm if a user would like to enter a number
    //if that user clicks "ok" prompt user for a number
    //confirm weather the number is even or odd
let enterNumber = confirm("Would you like to enter a number");
        let num = prompt("Chose a number");
        if(isNaN(num)){
            alert("you're dumb")
        }
        if(num % 2 == 0){
            alert("the number is even");
    }
        else {
            alert("the number is odd")
        }
alert(Number(num) + 100);
        if(Number(num) > 0){
            alert("the number is positive")
        }
        else{
            alert(Number(num) + (" is negative"));
        }