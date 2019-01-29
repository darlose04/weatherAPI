class Weather {
  constructor(city, state) {
    this.apiKey = '2facab35c0b18b91463312a58637fe50';
    // this.city = city;
    this.zip = zip;
  }

  // fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&APPID=${this.apiKey}&units=imperial`);

    const responseData = await response.json();

    // could use .main as well
    return responseData;
  }

  // Change weather location
  changeLocation(zip) {
    this.zip = zip;
  }
}