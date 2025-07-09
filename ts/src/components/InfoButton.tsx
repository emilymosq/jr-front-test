import React from 'react';

interface InfoButtonProps {
  onClick: () => void;
}

const InfoButton: React.FC<InfoButtonProps> = ({ onClick }) => {
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
