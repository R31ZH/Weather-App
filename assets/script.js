var cityName = document.getElementById("form1");
var btn = document.getElementById("btn1");
var weatherList = document.querySelector("ul");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  var weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName.value +
    "&appid=58779aa0221becea365dac01f1c0d429";
  // console.log(event.target);
  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var listItem = document.createElement("li");
      console.log(data.main);
      var header = document.createElement("h3");
      header.textContent = data.name;
      var humidity = document.createElement("p");
      var temp = document.createElement("p");
      var uv = document.createElement("p");
      var wind = document.createElement("p");
      humidity.textContent = data.main.humidity;
      wind.textContent = "Wind " + data.wind.speed + " MPH";
      temp.textContent = data.main.temp;
      // uv.textContent = data.
      listItem.appendChild(header);
      listItem.appendChild(humidity);
      listItem.appendChild(temp);
      listItem.appendChild(wind);
      // listItem.appendChild(uv);
      weatherList.appendChild(listItem);
    });

  var weatherUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName.value +
    "&appid=58779aa0221becea365dac01f1c0d429";
  console.log(event.target);
  fetch(weatherUrl)
    .then(function (weather) {
      return weather.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.list.length; i++) {
        const element = data.list[i];
        console.log(element);
      }
    });
});

// function getApi() {
//   var weatherUrl =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     cityName.value +
//     "&appid=58779aa0221becea365dac01f1c0d429";
//   fetch(weatherUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement("li");
//         listItem.textContent = data[i].html_url;
//         weatherList.appendChild(listItem);
//       }
//     });
// }
// btn.addEventListener("click", getApi);

// fetch(weatherUrl).then(function (response) {
//   console.log(response);
// });

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
