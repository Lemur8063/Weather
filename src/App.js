import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const apiKey = "55a346ef64175467a93be9bfb320e5fe";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    county: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }


  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    if (city) {
    let apiUrl = await 
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await apiUrl.json();
    let sunsetDate = new Date(data.sys.sunset * 1000);
        sunsetDate =  sunsetDate.toLocaleTimeString();
    let sunriseDate = new Date(data.sys.sunrise * 1000);
        sunriseDate =  sunriseDate.toLocaleTimeString();



    this.setState ({
        temp: data.main.temp,
        city: data.name,
        county: data.sys.country,
        sunrise: sunriseDate,
        sunset: sunsetDate,
        error: undefined
    });
  } else {
    this.setState({
      temp: undefined,
      city: undefined,
      county: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: "Please writting your city"
    });
  }
}
  render () {
    return (
      <div className="weatherContainer">
      <div className="weather-img">
      <div><Info/></div>
      </div>
      <div><Form gettingWeather = {this.gettingWeather}/></div>
      <div>
      <div className="info"><Weather
        temp={this.state.temp}
        city={this.state.city}
        county={this.state.county}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        error={this.state.error}
      /></div>
      </div>
      </div>
    );
  }
}

export default App;

