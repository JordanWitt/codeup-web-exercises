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
$(document).ready(function() {
    $('.learn').click(function(event) {
        event.preventDefault();
        $('dt').toggleClass('highlight');
    });
});
$( "h3" ).click(function() {
    $( "ul" ).each(function() {
        $( this ).children().last().toggleClass( "example2" );
    });
});
$( "button" ).click(function() {
    $( "ul" ).each(function() {
        $( this ).children().toggleClass( "example" );
    });
});

