class UI {
  constructor() {
    this.location = document.getElementById('w-location'),
    this.desc = document.getElementById('w-desc'),
    this.string = document.getElementById('w-string'),
    this.details = document.getElementById('w-details'),
    this.icon = document.getElementById('w-icon'),
    this.humidity = document.getElementById('w-humidity'),
    this.maxTemp = document.getElementById('w-maxTemp'),
    this.minTemp = document.getElementById('w-minTemp'),
    this.pressure = document.getElementById('w-pressure'),
    this.windSpeed = document.getElementById('w-windSpeed'),
    this.windDeg = document.getElementById('w-windDeg')
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp + '°F';
    this.icon.setAttribute('src',`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.maxTemp.textContent = `High: ${weather.main.temp_max} °F`;
    this.minTemp.textContent = `Low: ${weather.main.temp_min} °F`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} inHg`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} mph`;
    this.windDeg.textContent = `Wind Direction: ${weather.wind.deg}°`;
  }
}