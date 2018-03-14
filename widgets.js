let updateWidget = function(data) {

  console.log("Got weather data: ", data)

  let currentCity = $("#weather h4")
  currentCity.html(data.name)

  let currentTemperature = $("#weather p")
  currentTemperature.html("It is " + (data.main.temp) + " degrees outside")

  let replaceImage = $("#weather img")
  $(replaceImage).attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon +".png")
}

let realLocation = function() {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
}

$("#get_forecast").on("click", realLocation);

let getWeather = function(info) {

  let latitude = info.coords.latitude
  let longitude = info.coords.longitude

  let apiKey = 'fad13ca22af87754cadeaf2ec94e01e9';

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}


let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
