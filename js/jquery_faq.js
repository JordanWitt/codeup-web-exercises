"use strict";
$(document).ready(function() {
    $('.learnMore').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});
$( "h3" ).click(function() {
    $( "ul" ).each(function() {
        $( this ).children().last().toggleClass( "example2" );
    });
});
$( ".clickme1" ).click(function() {
    $( "ul" ).each(function() {
        $( this ).children().toggleClass( "example" );
    });
});
$( ".learn" ).click(function() {
    $( "ul" ).each(function() {
        $( this ).parent().toggleClass( "example3" );
    });
});
