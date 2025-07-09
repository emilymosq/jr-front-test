import React from 'react';

const InputSection = ({ 
  inputValue, 
  onInputChange, 
  onCheckStatus 
}) => {
  return (
    <div className="input-section">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Enter HTTP status code or name"
      />
      <button onClick={onCheckStatus}>Check Status</button>
    </div>
  );
};

export default InputSection;
