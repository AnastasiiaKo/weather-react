import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "MONDAY 12:00",
    description: "Party Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: "23",
    humidity: "72",
    wind: "6"
  };

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
            </form>
          </div>

          <div className="row align-items-start">
            <div className="col-4">
              <img src={weatherData.imgUrl} alt="wether today" />
              <br />
              <span>{weatherData.description}</span>
            </div>
            <div className="col-5">
              <div className="temp-today">
                <span className="temperature">{weatherData.temperature}</span>
                <span className="units">
                    °C |°F
                </span>
              </div>
              Feels Like <span>22</span> &deg;
            </div>
            <div className="col p-0">
              &#709; <span>20</span>&deg; &#708; <span>27</span>&deg;
              <br />
              Wind: <span>{weatherData.wind}</span> km/h
              <br />
              &#128167; <span>{weatherData.humidity}</span>%
            </div>
          </div>
          <div className="forecast-weather"></div>
        </div>
      </div>
      <div className="signature">
        <a
          href="https://github.com/wecodeschool/my-awsome-app"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Anastasiia Kosinova
      </div>
    </div>
  );
}
