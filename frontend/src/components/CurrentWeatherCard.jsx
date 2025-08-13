// CurrentWeatherCard.jsx
// Big today card top-left

import React from 'react';
import './CurrentWeatherCard.css';

const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@4x.png`;

const CurrentWeatherCard = ({ weather, unit }) => {
  if (!weather) return null;
  const icon = weather.weather?.[0]?.icon;
  const main = weather.weather?.[0]?.main;
  const desc = weather.weather?.[0]?.description;
  const toF = c => Math.round((c * 9) / 5 + 32);
  const temp = t => unit === 'F' ? toF(t) : Math.round(t);
  const tempUnit = unit === 'F' ? '°F' : '°C';
  const wind = unit === 'F' ? (weather.wind?.speed * 2.237).toFixed(1) : weather.wind?.speed;
  const windUnit = unit === 'F' ? 'mph' : 'm/s';
  return (
    <div className="current-weather-card glass">
      <div className="cw-header">
        <h2>{weather.name || 'Current Location'}</h2>
        <span className="cw-country">{weather.sys?.country}</span>
      </div>
      <div className="cw-main-row">
        <img className="cw-icon" src={getIconUrl(icon)} alt={desc} />
        <div className="cw-main-info">
          <div className="cw-temp">{temp(weather.main?.temp)}{tempUnit}</div>
          <div className="cw-feels">Feels like {temp(weather.main?.feels_like)}{tempUnit}</div>
          <div className="cw-desc">{main} <span className="cw-desc-detail">({desc})</span></div>
        </div>
      </div>
      <div className="cw-details-row">
        <div>Min: <b>{temp(weather.main?.temp_min)}{tempUnit}</b></div>
        <div>Max: <b>{temp(weather.main?.temp_max)}{tempUnit}</b></div>
        <div>Humidity: <b>{weather.main?.humidity}%</b></div>
        <div>Wind: <b>{wind} {windUnit}</b></div>
        <div>Clouds: <b>{weather.clouds?.all}%</b></div>
        <div>Pressure: <b>{weather.main?.pressure} hPa</b></div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
