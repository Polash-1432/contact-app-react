import React from 'react';

const Button = ({ text,image, handleChange ,onChange}) => {
  return (
    <button onClick={handleChange} onChange={onChange}>
      {image}{text}
    </button>
  );
};

export default Button;
