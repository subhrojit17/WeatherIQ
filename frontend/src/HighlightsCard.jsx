// HighlightsCard.jsx
// Air metrics (humidity/UVI etc.)

import React from 'react';
import './Weather.css';

const HighlightsCard = ({ highlights }) => {
  return (
    <div className="highlights-card glass">
      <h3>Today's Highlights</h3>
      <div className="highlights-grid">
        <div>Humidity: {highlights?.humidity}%</div>
        <div>UV Index: {highlights?.uvi}</div>
        <div>Wind: {highlights?.wind} km/h</div>
        {/* Add more metrics as needed */}
      </div>
    </div>
  );
};

export default HighlightsCard;
