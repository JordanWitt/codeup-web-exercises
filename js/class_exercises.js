console.log("sanity check");
// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false
function timesFour(input) {
    if(typeof input == "number"){
        return input * 4;
    }else{
        return false
    }
}

//     return input * 4
// }
 //    if(input == NaN){
 //        return false
 //    }


// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false
function convertDaysToHours(days) {
    if (isNaN(days)) {
        return false
    } else if (typeof (days) === "number" || parseInt(days)) {
        return Number(days) * 24;
    } else {
        return false;
    }
}

console.log(convertDaysToHours("hello"));
// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)               // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)           // “$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false
function calculatedTax(totalPaid, taxPercent) {
    if(isNan(totalPaid)){
        return false



//     }else if(typeof (totalPaid, taxPercent) === "number" || parseInt(totalPaid, taxPercent)){
//         return totalPaid * taxPercent;
//     }else{
//         return false
//     }
// }
