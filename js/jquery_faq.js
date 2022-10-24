"use strict";
$(document).ready(function() {
    $('.learnMore').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});
$(document).ready(function() {
    $('.learn').click(function(event) {
        event.preventDefault();
        $('dt').toggleClass('highlight');
    });
});