// CurrentWeatherCard.jsx
// Big today card top-left

import React from 'react';
import './Weather.css';


const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@4x.png`;

const CurrentWeatherCard = ({ weather }) => {
  if (!weather) return null;
  const icon = weather.weather?.[0]?.icon;
  const main = weather.weather?.[0]?.main;
  const desc = weather.weather?.[0]?.description;
  return (
    <div className="current-weather-card glass">
      <div className="cw-header">
        <h2>{weather.name || 'Current Location'}</h2>
        <span className="cw-country">{weather.sys?.country}</span>
      </div>
      <div className="cw-main-row">
        <img className="cw-icon" src={getIconUrl(icon)} alt={desc} />
        <div className="cw-main-info">
          <div className="cw-temp">{Math.round(weather.main?.temp)}°C</div>
          <div className="cw-feels">Feels like {Math.round(weather.main?.feels_like)}°C</div>
          <div className="cw-desc">{main} <span className="cw-desc-detail">({desc})</span></div>
        </div>
      </div>
      <div className="cw-details-row">
        <div>Min: <b>{Math.round(weather.main?.temp_min)}°C</b></div>
        <div>Max: <b>{Math.round(weather.main?.temp_max)}°C</b></div>
        <div>Humidity: <b>{weather.main?.humidity}%</b></div>
        <div>Wind: <b>{weather.wind?.speed} m/s</b></div>
        <div>Clouds: <b>{weather.clouds?.all}%</b></div>
        <div>Pressure: <b>{weather.main?.pressure} hPa</b></div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
