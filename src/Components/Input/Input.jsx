import React from 'react';
import '../Input/Input.css';
import Button from '../Button/Button';

const Input = ({ name, email, text, handleChange, contactChange ,onChange}) => {
  return (
    <div className='form_page'>
      <form className='form'>
        <div className='input_form'>
          <label htmlFor="name" className='form-control'>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='input_form'>
          <label htmlFor="email" className='form-control'>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className=''>
          {/* Trigger contactChange on button click */}
          <Button  handleChange={contactChange } text={text} />
        </div>
      </form>
    </div>
  );
};

export default Input;
