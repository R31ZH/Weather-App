var weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=58779aa0221becea365dac01f1c0d429";
var cityName = document.getElementById("form1");

var string = "fefwf";

cityName.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.target);
});

fetch(weatherUrl).then(function (response) {
  console.log(response);
});

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
//query selector, enters it into api, textcontent?, return fetch call

// THEN I am presented with current and future conditions for that city and that city is added to the search history
//current stuff, 5 day below, add content to page

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//add to searched div of old cities

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
//green yel or red

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
