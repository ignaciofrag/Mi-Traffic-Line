import React, { useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [light, setLight] = useState(null);

  return (
    <div id="trafficTop">
      <div className="poste"></div> {}
      <div id="container">
        <div
          className={`light red ${light === 'red' ? 'selected' : ''}`}
          onClick={() => setLight('red')}
        ></div>
        <div
          className={`light yellow ${light === 'yellow' ? 'selected' : ''}`}
          onClick={() => setLight('yellow')}
        ></div>
        <div
          className={`light green ${light === 'green' ? 'selected' : ''}`}
          onClick={() => setLight('green')}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
