// HighlightsCard.jsx
// Air metrics (humidity/UVI etc.)

import React from 'react';
import './HighlightsCard.css';

const HighlightsCard = ({ highlights, unit }) => {
  if (!highlights) return null;
  const wind = unit === 'F' ? (highlights.wind * 2.237).toFixed(1) : highlights.wind;
  const windUnit = unit === 'F' ? 'mph' : 'm/s';
  return (
    <div className="highlights-card glass">
      <h3>Today's Highlights</h3>
      <div className="highlights-grid">
        <div className="highlight-box">
          <div className="highlight-title">Humidity</div>
          <div className="highlight-value">{highlights.humidity}%</div>
        </div>
        <div className="highlight-box">
          <div className="highlight-title">UV Index</div>
          <div className="highlight-value">{highlights.uvi ?? '--'}</div>
        </div>
        <div className="highlight-box">
          <div className="highlight-title">Wind</div>
          <div className="highlight-value">{wind} {windUnit}</div>
        </div>
        {/* Add more metrics as needed */}
      </div>
    </div>
  );
};

export default HighlightsCard;
