import React from 'react';

const Button = ({ btnName,image, handleChange ,onChange, className}) => {
  return (
    <button onClick={handleChange} onChange={onChange} className={className}>
      {image}{btnName}
    </button>
  );
};

export default Button;
