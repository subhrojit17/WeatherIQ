// WeekForecastCard.jsx
// 7-day forecast cards (right col)

import React from "react";
import "./WeekForecastCard.css";

const getIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const WeekForecastCard = ({ week, compact, unit }) => {
  const toF = (c) => Math.round((c * 9) / 5 + 32);
  const tempUnit = unit === "F" ? "°F" : "°C";
  return (
    <div
      className={compact ? "dfc-week-row-inner" : "week-forecast-card glass"}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.7rem",
        }}
      >
        <h3 style={{ margin: 0 }}>7-Day Forecast</h3>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.10)",
            borderRadius: "1.2rem",
            padding: "0.2rem 0.7rem",
          }}
        >
          <span
            style={{
              fontWeight: unit === "C" ? 700 : 400,
              opacity: unit === "C" ? 1 : 0.6,
            }}
          >
            °C
          </span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span
            style={{
              fontWeight: unit === "F" ? 700 : 400,
              opacity: unit === "F" ? 1 : 0.6,
            }}
          >
            °F
          </span>
        </div>
      </div>
      <div className={compact ? "dfc-week-row-list" : "week-row"}>
        {week?.map((day, idx) => {
          const date = new Date(day.dt_txt);
          const weekday = date.toLocaleDateString(undefined, {
            weekday: "short",
          });
          const tempC = Math.round(day.main.temp);
          const temp = unit === "C" ? tempC : toF(tempC);
          return (
            <div
              key={idx}
              className={compact ? "dfc-week-day-block" : "day-block"}
            >
              <span className="dfc-week-day-label">{weekday}</span>
              <img
                className="dfc-week-day-icon"
                src={getIconUrl(day.weather[0].icon)}
                alt={day.weather[0].description}
              />
              <span className="dfc-week-day-temp">
                {temp}
                {tempUnit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekForecastCard;
