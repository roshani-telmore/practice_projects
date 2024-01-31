import Head from "next/head";
import React, { useState } from "react";
export default function WeatherApp() {
  const [location, setLocation] = useState(null);
  const [locationWeather, setLocationWeather] = useState(null);
  const callWeatherData = async (locationData) => {
    const weatherFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=dfb23c151f36a4b78498161b78be4e6c`
    );
    const weatherData = await weatherFetch.json();
    setLocationWeather(weatherData);
  };
  async function handleCliCk() {
    const latLong = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=dfb23c151f36a4b78498161b78be4e6c`
    );
    const asPerLocation = await latLong.json();
    callWeatherData(asPerLocation[0]);
  }
  console.log("first", locationWeather);
  return (
    <div className="main-weather">
      <img src="/images/travel-world.png" />
      
      <div className="weather-app">
        <div className="search-bar">
          <input
            type="text"
            onBlur={(e) => setLocation(e.target.value)}
            placeholder="Enter your city"
          />

          <button
            className="btn"
            onClick={() => {
              handleCliCk();
            }}
          >
            Get Weather
          </button>
          <button/>
        </div>

        {location && locationWeather ? (
          <div className="weather-data">
            <span>
              {(locationWeather.main.temp - 273.15).toFixed(0)}
              <sup>&nbsp; 0</sup>
            </span>
            <span>{locationWeather.main.humidity}</span>
          </div>
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
}
