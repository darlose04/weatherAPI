// Initialize storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
// Initialize weather object
const weather = new Weather(weatherLocation.zip);
// Initialize UI
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn'),addEventListener('click', (e) => {
  const zip = document.getElementById('zip').value;

  weather.changeLocation();

  // Get and display weather
  getWeather();

  // close the modal - jquery because of bootstrap
  $('#locModal').modal('hide');
});



function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
