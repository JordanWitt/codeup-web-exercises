"use strict";
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const city = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//setting the current date and time on the page
setInterval(() => {
    const now = new Date();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();
    const hour = now.getHours();
    const hoursIn12rFormat = hour >= 13 ? hour % 12 : hour
    const minutes = ('0' + now.getMinutes()).slice(-2); //displays the zero
    const seconds = now.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    timeEl.innerHTML = hoursIn12rFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);



// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: openweatherKey,
//     q:     "Pana, US",
//     units: "imperial"
// }).done(function(data) {
//     console.log(data)
//     $('#current-weather-items').empty()
//     let displayCurrent = ""
//         displayCurrent += '<h3>' + data.city.name + ", " + data.city.country + '</h3>';
//     $('#current-weather-items').append(para)
//     $('#data').empty()
//     data.list.forEach(x => {
//         if (x.dt_txt.split(' ')[1] === '15:00:00') {
//
//             if (count === 0) {
//
//             }
//             else{
//
//                 let html = ""
//                 html += '<div class=\"currentWeather\" id=\"current-weather-items\">'
//                 html += '<div class="date">'  + x.dt_txt.split(' ')[0] + '</div>'
//                 html += '<div class="temperature">'  + fahrenheit(x.main.temp_min) + '˚F' + ' / ' + fahrenheit(x.main.temp_max) + '˚F' + '</div>'
//                 html += '<div class="description">'  + x.weather[0].description + '</div>'
//                 html += '<div class="humidity">'  + 'Humdidity: ' + x.main.humidity +  '</div>'
//                 html += '<div class="wind">'  + 'Wind: ' + x.wind.speed + '</div>'
//                 html += '<div class="pressure">'  + 'Pressure: ' + x.main.pressure + '</div>'
//                 html += '</div>';
//
//                 $('#data').append(html)
//                 count--
//
//             }
//         }
//     })
// });
// mapboxgl.accessToken = mapboxKey;
//
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/satellite-streets-v11',
//     zoom: 10,
//     center: [-89.07630, 39.38780]
//
// });
//
// //    start of click marker
//
// this.marker = new mapboxgl.Marker();
// this.map.on('click', this.addMarker.bind(this),
// );
//
// //start on text input
// function findLoc() {
//     let input = document.getElementById('searchbar').value;
//     geocode(input, mapboxKey).then(function(coordinates) {
//         if (coordinates) {
//             var marker = new mapboxgl.Marker()
//                 .setLngLat(coordinates)
//
//                 .addTo(map)
//
//         }
//
//
//
//         map.flyTo({center: coordinates});
//
//
//
//         let superArr = []
//         let count = 5;
//         $.ajax({
//             url: "http://api.openweathermap.org/data/2.5/forecast",
//             type: "GET",
//             data: {
//                 APPID: openweatherKey,
//                 lat:    coordinates[1],
//                 lon:   coordinates[0],
//             }
//         }).done(function(data) {
//
//             $('#current-weather-items').empty()
//             let para = "";
//             para += '<h3>' + data.city.name + ", " + data.city.country + '</h3>';
//             $('#current-weather-items').append(para)
//             $('#data').empty()
//
//             data.list.forEach(x => {
//                 if (x.dt_txt.split(' ')[1] === '00:00:00') {
//                     if (count === 0) {
//
//                     } else {
//
//
//                         let html = "";
//
//                         html += '<div class=\"currentWeather\" id=\"current-weather-items\">'
//                         html += '<div class="date">'  + x.dt_txt.split(' ')[0] + '</div>'
//                         html += '<div class="temperature">'  + fahrenheit(x.main.temp_min) + '˚F' + ' / ' + fahrenheit(x.main.temp_max) + '˚F' + '</div>'
//                         html += '<div class="description">'  + x.weather[0].description + '</div>'
//                         html += '<div class="humidity">'  + 'Humdidity: ' + x.main.humidity +  '</div>'
//                         html += '<div class="wind">'  + 'Wind: ' + x.wind.speed + '</div>'
//                         html += '<div class="pressure">'  + 'Pressure: ' + x.main.pressure + '</div>'
//                         html += '</div>';
//
//                         $('#data').append(html)
//                         count--
//                     }
//                 }
//             })
//         });
//
//     })
// }
//
// let searchBar = document.getElementById('cityNameInput');
// searchBar.addEventListener('click', findLoc)
//
//
// //end of text input adding the function addmarker
//
//
// function addMarker(event) {
//
//     var input = event.lngLat;
//
//     this.marker.setLngLat(input).addTo(this.map);
//
//
//
//     let superArr = []
//     let count = 5;
//     $.ajax({
//         url: "http://api.openweathermap.org/data/2.5/forecast",
//         type: "GET",
//         data: {
//             APPID: openweatherKey,
//             lat:    input.lat,
//             lon:   input.lng,
//         }
//     }).done(function(data) {
//         $('#location').empty()
//         let para = "";
//         para += '<h3>' + data.city.name + ", " + data.city.country + '</h3>';
//         $('#location').append(para)
//         $('#data').empty()
//         data.list.forEach(x => {
//             if (x.dt_txt.split(' ')[1] === '00:00:00') {
//                 if (count === 0) {
//
//                 } else {
//
//
//                     let html = "";
//
//                     html += '<div class=\"currentWeather\" id=\"current-weather-items\">'
//                     html += '<div class="date">'  + x.dt_txt.split(' ')[0] + '</div>'
//                     html += '<div class="temperature">'  + fahrenheit(x.main.temp_min) + '˚F' + ' / ' + fahrenheit(x.main.temp_max) + '˚F' + '</div>'
//                     html += '<div class="description">'  + x.weather[0].description + '</div>'
//                     html += '<div class="humidity">'  + 'Humdidity: ' + x.main.humidity +  '</div>'
//                     html += '<div class="wind">'  + 'Wind: ' + x.wind.speed + '</div>'
//                     html += '<div class="pressure">'  + 'Pressure: ' + x.main.pressure + '</div>'
//                     html += '</div>';
//
//                     $('#data').append(html)
//                     count--
//                 }
//             }
//         })
//     });
//
//
// }
