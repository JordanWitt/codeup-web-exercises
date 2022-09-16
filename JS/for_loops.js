"use strict";
console.log("sanity check");
//For Loops exercise*
let input = prompt("7");
function showMultiplicationTable(input) {
    for (let i = 1; i <= 10; i++) {
        let num = input * i;
        console.log(input + "x" + i + "=" + num);
    }
}
showMultiplicationTable(7);