'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);

// 'use strict';
//
// var delay = 2000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
// }, delay);
//
let keepSeeing5Seconds = confirm("Are you still watching?")
if(!keepSeeing5Seconds){
    clearInterval(timeoutId)
    confirm("would you like to exit?")
    location.back();
} else if(keepSeeing5Seconds){
        alert("press play");
}
// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring
// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//     if (i < txt.length) {
//         document.getElementById("demo").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }