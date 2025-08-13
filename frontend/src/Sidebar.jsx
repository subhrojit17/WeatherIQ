// Sidebar.jsx
// Vertical navigation on the side

import React from 'react';
import './Weather.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      {/* Add navigation items here */}
      <ul>
        <li>Today</li>
        <li>Week</li>
        <li>Highlights</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
