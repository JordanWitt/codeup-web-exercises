"use strict";
let secretCode = [38,38,40,40,37,39,37,39,66,65];//the key code that matches the keys the user hits
let userInput = [];//empty array the user inputs

$(document).keyup(function(event){
    console.log(event.keyCode);//logs which key is pressed by using key, keyCode(being used) or which
    let konamiCode = event.keyCode
    userInput.push(konamiCode)//pushes the keycode in the console so we can see it. (returns the numeric value of key)
    if(userInput.toString().length === secretCode.toString().length){//checking if the user input matches the length of the secret code
        let soundAlert = new Audio('images/smb3_level_clear.wav');
        soundAlert.play();
    }
});


// TRIAL AND ERROR FUNCTIONS BELOW
// "use strict";
// console.log("hello world");
// //testing link
//
//
// //logging the key events when pressed "released" in the console.
// const secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
// const keyPress = [];
// "use strict";
//
// let secretCode = [38,38,40,40,37,39,37,39,66,65];
// let userInput = [];//empty array the user inputs
//
// $(document).keyup(function(event) {
//     userInput.push(event.keyCode);
//     console.log(userInput);
//     if (userInput === secretCode){
//         alert('You have added 30 lives');
//     };
//     console.log(event.keyCode);
// });