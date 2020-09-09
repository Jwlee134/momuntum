const weather = document.querySelector(`.js-weather`),
  API_key = `cec643f0e0bb12a032ac07c9750fc06a`;

function saveCoords(coordsObj) {
  localStorage.setItem(`coords`, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const location = json.name;
      weather.innerHTML = `Temp : ${temp}℃<br>Area : ${location}`;
    });
}

function success(position) {
  const latitude = position.coords.latitude,
    longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function error() {
  console.log(`Cannot access to your location`);
}

function askForCoord() {
  navigator.geolocation.getCurrentPosition(success, error);
}

function loadCoords() {
  const loadCoord = localStorage.getItem(`coords`);
  if (loadCoord === null) {
    askForCoord();
  } else {
    const parseCoords = JSON.parse(loadCoord);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
