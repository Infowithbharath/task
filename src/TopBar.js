import React, { useState, useEffect } from 'react';
import './TopBar.css'; // We'll create this for styling

const TopBar = () => {
  const [position, setPosition] = useState(100); // Start off-screen to the right

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition(prev => {
        // When text is completely off-screen to the left, reset to right
        if (prev < -1000) return 100;
        return prev - 1;
      });
    }, 30); // Adjust speed by changing interval time

    return () => clearInterval(animation);
  }, []);

  return (
    <div className="top-bar-container">
      <div 
        className="top-bar-content"
        style={{ transform: `translateX(${position}%)` }}
      >
        You can participate in person at <strong>Kuala Lumpur, Malaysia</strong> or <strong>Virtually</strong> from your home or office.
      </div>
    </div>
  );
};

export default TopBar;