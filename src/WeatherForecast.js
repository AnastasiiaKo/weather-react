import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WetherForecast.css";


export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    const apiKey = "ded93636eb7b5fe9e7d49e20c4422f20";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unites=metric`;

    axios.get(apiUrl).then(handleResponse);
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div> 
                    <WeatherIcon code="01d" size={30} />
                    <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max"> 19°</span>
                    <span className="WeatherForecast-temperature-min"> 10°</span>     
                    </div>
                </div>
            </div>
        </div>
    )
}