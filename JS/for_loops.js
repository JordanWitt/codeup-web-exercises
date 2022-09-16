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
for (let i = 0; i <= 10; i++){
    let randomNumber = (Math.floor(Math.random() * 201)) + 20;
    let check = randomNumber % 2;
    // console.log(randomNumber, check);
    if(check === 0) {
        console.log(randomNumber + " is even stevens");
    }else{
            console.log(randomNumber + " is oddball");
        }
}