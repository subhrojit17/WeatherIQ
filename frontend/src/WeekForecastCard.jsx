// WeekForecastCard.jsx
// 7-day forecast cards (right col)

import React from 'react';
import './Weather.css';


const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const WeekForecastCard = ({ week }) => {
  return (
    <div className="week-forecast-card glass">
      <h3>7-Day Forecast</h3>
      <div className="week-row">
        {week?.map((day, idx) => {
          const date = new Date(day.dt_txt);
          const weekday = date.toLocaleDateString(undefined, { weekday: 'short' });
          return (
            <div key={idx} className="day-block">
              <span>{weekday}</span>
              <img src={getIconUrl(day.weather[0].icon)} alt={day.weather[0].description} />
              <span>{Math.round(day.main.temp)}°C</span>
              <span className="desc">{day.weather[0].main}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekForecastCard;
