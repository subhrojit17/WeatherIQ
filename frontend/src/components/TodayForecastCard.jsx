// TodayForecastCard.jsx
// Combined Today/Week forecast dashboard card

import React from 'react';
import WeekForecastCard from './WeekForecastCard';
import './TodayForecastCard.css';

const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const TodayForecastCard = ({ hourly, week, weather, unit }) => {
  const toF = c => Math.round((c * 9) / 5 + 32);
  const temp = t => unit === 'F' ? toF(t) : Math.round(t);
  const tempUnit = unit === 'F' ? '°F' : '°C';
  const wind = unit === 'F' ? (weather?.wind?.speed * 2.237).toFixed(1) : weather?.wind?.speed;
  const windUnit = unit === 'F' ? 'mph' : 'm/s';
  return (
    <div className="dashboard-forecast-card glass">
      <div className="dfc-header-row">
        <div className="dfc-main-summary">
          <div className="dfc-main-condition">{weather?.weather?.[0]?.main || '--'}</div>
          <div className="dfc-main-location">{weather?.name}, {weather?.sys?.country}</div>
        </div>
        <div className="dfc-unit-toggle">
          <span className={unit==='C'?"dfc-unit":"dfc-unit inactive"}>°C</span>
          <span className={unit==='F'?"dfc-unit":"dfc-unit inactive"}>°F</span>
        </div>
      </div>
      <div className="dfc-hourly-row">
        {hourly?.map((hour, idx) => (
          <div key={idx} className="dfc-hour-block">
            <div className="dfc-hour-time">{hour.dt_txt.slice(11, 16)}</div>
            <img className="dfc-hour-icon" src={getIconUrl(hour.weather[0].icon)} alt={hour.weather[0].description} />
            <div className="dfc-hour-temp">{temp(hour.main.temp)}{tempUnit}</div>
          </div>
        ))}
      </div>
      <div className="dfc-details-row">
        <span>Humidity: <b>{weather?.main?.humidity}%</b></span>
        <span>Wind: <b>{wind} {windUnit}</b></span>
        {/* Add more details as needed */}
      </div>
      <div className="dfc-week-row">
        <WeekForecastCard week={week} compact={true} unit={unit} />
      </div>
    </div>
  );
};

export default TodayForecastCard;
