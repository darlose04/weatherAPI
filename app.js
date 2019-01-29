// Initialize weather object
const weather = new Weather('66046');

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation();

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
