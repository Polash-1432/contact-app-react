import React from 'react';
import '../Input/Input.css';

const Input = ({ valuName,inputType,inputName, placeholder, labelName}) => {
  return (
    <div className='form_page'>
        <div className='input_form'>
          <label htmlFor="name" className='form-control'>{labelName}</label>
          <input
            type={inputType}
            value={valuName}
            name={inputName}
            placeholder={placeholder}
            
          />
        </div>
        
    </div>
  );
};

export default Input;
