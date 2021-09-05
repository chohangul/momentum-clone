const API_KEY = "cea4f660385657856be00cbe5ed39e44";
const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `You are in ${data.name} now.`;
      weather.innerText = `And Today's weather is ${data.weather[0].main} (${data.main.temp}°C)`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
