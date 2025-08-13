import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

import CurrentWeatherCard from "./components/CurrentWeatherCard";
import TodayForecastCard from "./components/TodayForecastCard";
import HighlightsCard from "./components/HighlightsCard";

export default function Weather({ unit, theme }) {
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [highlights, setHighlights] = useState(null);
  const [error, setError] = useState("");

  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => setError("Unable to retrieve your location")
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (coords.lat && coords.lon) {
        try {
          setError("");
          const res = await axios.get(API_BASE_URL, {
            params: { lat: coords.lat, lon: coords.lon },
          });

          const forecastList = res.data.forecast?.list || [];
          const todayStr = new Date().toISOString().slice(0, 10);

          const todayHourly = forecastList.filter((item) =>
            item.dt_txt.startsWith(todayStr)
          );

          const weekDays = [];
          const seenDays = new Set();
          for (const item of forecastList) {
            const date = item.dt_txt.slice(0, 10);
            const hour = item.dt_txt.slice(11, 19);
            if (hour === "12:00:00" && !seenDays.has(date)) {
              weekDays.push(item);
              seenDays.add(date);
            }
          }

          setWeather(res.data.current);
          setForecast(weekDays);
          setHourly(todayHourly);
          setHighlights({
            humidity: res.data.current?.main?.humidity,
            uvi: null,
            wind: res.data.current?.wind?.speed,
          });
        } catch {
          setError("Failed to fetch weather data");
        }
      }
    }
    fetchData();
  }, [coords]);

  return (
    <div className={`weather-dashboard-root ${theme}`}>
      <div className="weather-grid">
        <section className={`weather-main ${theme}`}>
          <CurrentWeatherCard weather={weather} unit={unit} />
        </section>

        <section className={`weather-today ${theme}`}>
          <TodayForecastCard
            hourly={hourly}
            week={forecast}
            weather={weather}
            unit={unit}
          />
        </section>

        <section className={`weather-highlights ${theme}`}>
          <HighlightsCard highlights={highlights} unit={unit} />
        </section>
      </div>

      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}
