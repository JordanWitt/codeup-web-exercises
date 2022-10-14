"use strict";
console.log("sanity check");
//For Loops exercise*
// let input = prompt("7");
// function showMultiplicationTable(input) {
//     for (let i = 1; i <= 10; i++) {
//         let num = input * i;
//         console.log(input + "x" + i + "=" + num);
//     }
// }
// showMultiplicationTable(7);
//QUESTION 3***
// for (let i = 0; i <= 10; i++){
//     let randomNumber = (Math.floor(Math.random() * 201)) + 20;
//     let check = randomNumber % 2;
//     // console.log(randomNumber, check);
//     if(check === 0) {
//         console.log(randomNumber + " is even stevens");
//     }else{
//             console.log(randomNumber + " is oddball");
//         }
// }
//QUESTION 4**
// for (let i = 1; i < 10; i++){
//     let result = [];
//     for (let p = 1; p <= i; p++){
//         result.push(i);
//         // console.log(result);
//     }
//     console.log(result.join(""));
// }
//QUESTION 5**
// for (let i = 100; i >= 5; i--) {
//      if(i % 5 === 0) {
//           console.log(i);
//      }
// }


var i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}