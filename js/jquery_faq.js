"use strict";
$('document').ready(function() {
    $('.learnMore').click(function(event) {
        event.preventDefault();
        $('.invisible').toggleClass('invisible');
    });
});
$('document').ready(function() {
    $('.learn').click(function(event) {
        event.preventDefault();
        $('.highlight').toggleClass('highlight');
    });
});