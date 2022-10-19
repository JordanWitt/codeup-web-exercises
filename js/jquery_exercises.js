// $(function(){
//     alert('The DOM has finished loading!');
// })
// $('.code-up').css('border', '1px solid #F00');
//adds border around the class of code-up
// $('li').css('font-size', '20px');

// $('h1, p, li').css('background-color', '#FF0');
//highlighting the contents yellow that are in the elements h1, p, and li

// let alertH1 = $('h1').html();
// alert(alertH1);
//alerting anthing thats in the contents of the h1 element
$('h1').click
    (function() {
        $(this).css('background-color', '#FF0');
});
//Highlights the h1 element on'click

$('p').dblclick
    (function(e) {
    $(this).css('font-size', '20px');
});
//changes the size of paragraphs when clicked on

$('li').hover(
    function() {
        $(this).css('background-color', '#F00');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);
//on hover changes the list color to red, stays the same if not