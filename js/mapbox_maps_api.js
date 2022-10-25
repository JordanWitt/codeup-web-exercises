"use strict"
const mapboxgl.accessToken = 'pk.eyJ1Ijoid2l0dC1qb3JkYW4iLCJhIjoiY2w5bjg2NmYzMDMxMzNubXoya3NkdmFmNCJ9.XeAO7FLOUKOLrnRxYiQvgw';

//object of eats
let goodEats = [{
    name: "Mucks Place",
    address: "12 E 2nd St, Pana, IL 62557",
    popupHTML: "<em> Mucks Place:</em> Cool bar, but the tenderloin was bad, and we were up-charged for tomato and pickle toppings."
},{
    name: "Whiskey Bill's Saloon and Liquor Emporium, LLC",
    address: "121 E Olive St, Pana, IL 62557",
    popupHTML: "<em> Whiskey Bills:</em>  I won't bother trying this place again."
},{
    name: "Curly Girls Cafe & Catering restaurant",
    address: "203 N Park Ave, Pana, IL 62557",
    popupHTML: "<em> Curly Girls:</em>  Hopefully they will offer more lunch items in the future. Limited menu items to choose from. "
}];
