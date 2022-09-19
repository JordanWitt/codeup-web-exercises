// "use strict";
//console.log("sanity check");
let userInput = "";
while(true){
    userInput = prompt("enter in odd number between 1-50");
    if(userInput % 2 !== 0 && userInput <= 50 && userInput >= 1){
        break;
    }
        //console.log(userInput)
}
for(let i = 1; i < 50; i+=2){
    if(userInput == i) {
        console.log("skipping " + userInput)
        continue;
    }console.log("your odd number " + i);
}
//console.log(userInput);