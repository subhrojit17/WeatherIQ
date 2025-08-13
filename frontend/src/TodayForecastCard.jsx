// TodayForecastCard.jsx
import React from 'react';
import './Weather.css';
import './WeekForecastCard.css'; // New weekly forecast styles

const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const TodayForecastCard = ({ hourly, weekly }) => {
  return (
    <div className="today-forecast-card glass">
      <h3>Today's Forecast</h3>
      <div className="hourly-row">
        {hourly?.map((hour, idx) => (
          <div key={idx} className="hour-block">
            <span>{hour.dt_txt.slice(11, 16)}</span>
            <img src={getIconUrl(hour.weather[0].icon)} alt={hour.weather[0].description} />
            <span>{Math.round(hour.main.temp)}°C</span>
            <span className="desc">{hour.weather[0].main}</span>
          </div>
        ))}
      </div>

      {/* Weekly Forecast */}
      {weekly && (
        <>
          <h3>This Week</h3>
          <div className="weekly-forecast">
            {weekly.map((day, idx) => (
              <div key={idx} className="weekly-day">
                <div className="dfc-week-day-label">
                  {new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}
                </div>
                <img
                  className="dfc-week-day-icon"
                  src={getIconUrl(day.weather[0].icon)}
                  alt={day.weather[0].description}
                />
                <div className="dfc-week-day-temp">
                  {Math.round(day.main.temp)}°C
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TodayForecastCard;
