import React from 'react';

const InfoButton = ({ onClick }) => {
  return (
    <button 
      className="info-button" 
      onClick={onClick}
      aria-label="Show status information"
    >
      ℹ️
    </button>
  );
};

export default InfoButton;
