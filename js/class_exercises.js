// // console.log("sanity check");
// // // Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// // // timesFour(0) //0
// // // timesFour("5") //20
// // // timesFour(-5) //-20
// // // timesFour('Texas') //false
// // // timesFour([2,1,0]) //false
// // // timesFour(true) //false
// // // timesFour(null) //false
// // function timesFour(input) {
// //     if(typeof input == "number"){
// //         return input * 4;
// //     }else{
// //         return false
// //     }
// // }
// //
// // //     return input * 4
// // // }
// //  //    if(input == NaN){
// //  //        return false
// //  //    }
// //
// //
// // // Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// // // convertDaystoHours(0) //0
// // // convertDaystoHours('5') // 120
// // // convertDaystoHours('Texas') //false
// // // convertDaystoHours([2, 1, 0]) //false
// // // convertDaystoHours(true) //false
// // // convertDaystoHours(false) //false
// // function convertDaysToHours(days) {
// //     if (isNaN(days)) {
// //         return false
// //     } else if (typeof (days) === "number" || parseInt(days)) {
// //         return Number(days) * 24;
// //     } else {
// //         return false;
// //     }
// // }
// //
// // console.log(convertDaysToHours("hello"));
// // // Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// // // calculateTax(25, 8)               // “$27.00"
// // // calculateTax(10, 12)             // “$11.20”
// // // calculateTax(120, 15.5)           // “$138.60"
// // // calculateTax(10, true)           // false
// // // calculateTax([1, 2, 3], 10)      // false
// // // calculateTax(“Codeup”, 100)      // false
// // // calculateTax()                   // false
// // function calculatedTax(totalPaid, taxPercent) {
// //     if(isNan(totalPaid)){
// //         return false
// //
// //
// //
// // //     }else if(typeof (totalPaid, taxPercent) === "number" || parseInt(totalPaid, taxPercent)){
// // //         return totalPaid * taxPercent;
// // //     }else{
// // //         return false
// // //     }
// // // }
// // Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// // example input: [1,2,3,4,5] expected output: [2,4]
// evenNumbers = [1,2,3,4,5,6,7,8,9]
// function returnEvenNumbersFromArray(array) {
//     finishedArray = []
//     array.forEach(function(num) {
//         if(!(num % 2)) {
//             finishedArray.push(num)
//         }
//     })
//     return finishedArray;
// }
// console.log(returnEvenNumbersFromArray(evenNumbers));
// //
// // function evenNumbers(stevens){
// //     let nums = [1,2,3,4,5,6,7,8];
// //     let even = nums.filter(number => {
// //         return number % 2 === 0;
// // });
// //     console.log
//
//
//     //     for(let i = 0; i < nums.length; i++) {
// //         if(nums[i] % 2 === 0) {
// //         }
// //     }
// // }
//
//
//
// // function getEvenNumbers(nums) {
// //     let even = [1,2,3,4,5]
// //     for(let i = 0; i < even.length; i++){
// //         if(even[i] % 2 == 0) {
// //             alert("number is even");
// //         }else{
// //             return false;
// //         }
// //     }
// // }
//
// // Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
// Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string of each of the objects. Return the new array of objects. Don’t mutate the original array.
// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
// let places = [
//     {
//         Continent: "Asia",
//         Cities:{
//             city: "Tokyo",
//             country: "Japan"
//         }
//     },
//     {
//         Continent: "Asia",
//         Cities:{
//             city: "Bangkok",
//             country: "Thailand"
//         }
//     }
// ]
// let i = 20;
//  while(i >= 0) {
//      console.log(i); i--;
//  }
//
//  let fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
//   fruits.unshift("strawberry");
//   fruits.push("strawberry");
// let start = 4;
// let deleteCount = 0;
// fruits.splice(start, deleteCount, 'strawberry');
// console.log(fruits);
