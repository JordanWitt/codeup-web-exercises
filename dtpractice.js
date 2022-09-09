// "use strict";
// //Question 3a
// //
// let tlm = 3;
// let bb = 5;
// let herc = 1;
// let price = (tlm + bb + herc) * price;
//
// console.log(price);
//
// //Question 3b
//
// let googlePay = 400;
// let amazonPay = 380;
// let facebookPay = 350;
//
// let gTotal = googlePay * 6;
// let aTotal = amazonPay * 4;
// let fTotal = facebookPay * 10;
//
// let paycheck = gTotal + aTotal + fTotal;
// console.log(paycheck);
//
// //Question 3c
//
// //canBeEnrolled = IF NOT FULL and SCHEDULE DOES NOT CONFLICT
//
// let spaceInClass = true;
//
// let spaceInSchedule = true;
//
// let canBeEnrolled = spaceInClass && spaceInSchedule
//
// console.log("Can I be enrolled?:" + canBeEnrolled);

//Question 3d

//offerCanBeApplied = IF MORE THAN 2 ITEMS and OFFER NOT EXPIRED or IS PREMIUM MEMBER

let offerNotExpired = true;
let moreThan2 = true;
let isPremiumMember = false;
let offerCanBeApplied = offerNotExpired && (moreThan2 || isPremiumMember);

console.log("it is true" + offerNotExpired + "and that you have" + moreThan2 + "more than one item but I see" + isPremiumMember + "you are not a premium member");
console.log(offerCanBeApplied);

//Question 3e

let username = "codeup";
let password = "notastrongpassword"

// the password must be at least 5 characters

let passwordOverFive = password.legnth >=5;
let noUserNameInPassword = password == (password.indexOf(username) == -1;
// the username must be no more than 20 characters
let userNameLengthOkay = username.length < 20;
let noWhiteSpace =!((username.startsWith("") || username.endsWith("")) || (password.startsWith("") || password.endsWith("")));


if (noUserNameInPassword && passwordOverFive && userNameLengthOkay && noWhiteSpace) {
    console.log("You Username and Password are good!")
}
