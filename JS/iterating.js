(function(){
    "use strict";
    console.log("sanity check");

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = (["Han ", "Anikan ", "Padme ", "Luke ", "Leia ", "Ben"]);
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(names[4]);
    console.log(names[5]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
let anArray = ["a", "b", "c","d"];
for (let anArray = 0; anArray < anArray.length; anArray++);
console.log(anArray);
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
anArray.forEach(function(anArray){
    console.log("some letters " + anArray + "!");
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
let first = [1, 2, 3, 4, 5];
let second = [1, 2, 3, 4, 5];
let last = [1, 2, 3, 4, 5];
console.log(first[0]);
console.log(second[1]);
console.log(last[4]);
})();
console.log()