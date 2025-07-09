import React from 'react';

const TrafficLight = ({ status }) => {
  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={`light red ${status === 'red' ? 'active' : ''}`}></div>
        <div className={`light orange ${status === 'orange' ? 'active' : ''}`}></div>
        <div className={`light green ${status === 'green' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default TrafficLight;
