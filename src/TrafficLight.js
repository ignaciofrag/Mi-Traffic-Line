import React, { useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
    const [color, setColor] = useState("red"); 

    return (
        <div id="trafficTop">
            <div className="poste"></div>
            <div id="container">
                <div
                    className={`light red ${color === 'red' ? 'selected' : ''}`}
                    onClick={() => setColor('red')}
                ></div>
                <div
                    className={`light yellow ${color === 'yellow' ? 'selected' : ''}`}
                    onClick={() => setColor('yellow')}
                ></div>
                <div
                    className={`light green ${color === 'green' ? 'selected' : ''}`}
                    onClick={() => setColor('green')}
                ></div>
            </div>
        </div>
    );
};

export default TrafficLight;
