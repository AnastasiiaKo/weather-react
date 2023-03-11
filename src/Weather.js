import React, { useState }  from "react";
import axios from "axios";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.main.name,
      date: "MONDAY 12:00",
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });

  }

  if (weatherData.ready){
    return (
    <div className="Weather">
      <div className="box">
        <div className="container">
          <div className="row">
            <form className="row mb-3">
              <div className="col-5">
                <h1>{weatherData.city}</h1>
                <div>{weatherData.date}</div>
              </div>
              <div className="col-3 search-window">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Tipe a city..."
                  autocomplete="off"
                ></input>
              </div>
              <div className="col search-button">
                <button type="submit" className="btn btn-primary mb-3">
                  Search
                </button>
              </div>
              <div class="col current-button">
                <button
                  type="button"
                  className="btn btn-success"
                  id="button-location"
                >
                  {" "}
                  Current{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="row align-items-start">
            <div className="col-4">
              <img src={weatherData.imgUrl} alt="wether today" />
              <br />
              <span className="text-capitalize">{weatherData.description}</span>
            </div>
            <div className="col-5">
              <div className="temp-today">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="units">
                    °C |°F
                </span>
              </div>
              Feels Like <span>22</span> &deg;
            </div>
            <div className="col p-0">
              &#709; <span>20</span>&deg; &#708; <span>27</span>&deg;
              <br />
              Wind: <span>{Math.round(weatherData.wind)}</span> km/h
              <br />
              &#128167; <span>{weatherData.humidity}</span>%
            </div>
          </div>
          <div className="forecast-weather"></div>
        </div>
      </div>
    </div>
  );
  } else {
    const apiKey = "ded93636eb7b5fe9e7d49e20c4422f20";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }


}
