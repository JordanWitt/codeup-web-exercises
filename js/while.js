"use strict";
// let number = 2
// while(number <= 65536){
//     console.log(number);
//     number = number * 2;
// }
//Question Do While
let allCones = Math.floor(Math.random() * 50) + 50;
do {
    let conesSold = Math.floor(Math.random() * 5) + 1

    console.log("You would like " + conesSold + " I have " + allCones + " left to sell.");

    if(conesSold > allCones){
        console.log("There's not enough cones, scat.");
        continue;
    }
    allCones -= conesSold;
    console.log(" I just sold " + conesSold + " now I have " + allCones + " left to sell.");
}while(allCones > 0)


    //     let conesSold = Math.floor(Math.random() * 5) + 1
//     if (canBuy < 0) ;
//     console.log("Cannot sell you 6 cones I only have 3" + allCones)
// }