import React, { useState } from 'react';
import '../AddContact/AddContact.css'
import { useNavigate } from 'react-router-dom';
import Navigation from '../Components/Navigation/Navigation';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';

const AddContact = () => {
  const [contact, setContact] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleAddContact = () => {
    console.log('Contact Added:', contact);
    // Navigate to ContactPresent page after adding contact
    navigate('/contact-present');
  };

  return (
    <div className='page_decoration'>
      <Navigation />

      <div className='add-contact-page'>
        <Input
          labelName='Name' //type email
          inputType='text' //label name email
          inputName='name'
          placeholder=''
        />
        <Input
          labelName='Email' //type email
          inputType='email' //label name email
          inputName='email'
          placeholder=''
        />
        <div className='add-contact-btn'>
          <Button
             btnName='Add Contact'
             handleChange={handleAddContact} 
             onChange={handleChange} 
          />
        </div>
      </div>
    </div>
  );
};

export default AddContact;
