'use strict';

var delay = 2000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
}, delay);

let keepSeeing5Seconds = confirm("Are you still watching?")
if(!keepSeeing5Seconds){
    clearInterval(timeoutId)
    confirm("would you like to exit?")
} else if(keepSeeing5Seconds){
        alert("press play");
}
// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring