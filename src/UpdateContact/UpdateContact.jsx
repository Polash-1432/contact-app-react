import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../Components/Input/Input';
import Navigation from '../Components/Navigation/Navigation';
import Button from '../Components/Button/Button';

const UpdateContact = () => {
  const location = useLocation();
  const contact = location.state?.contact; // Access the passed contact data
  console.log("🚀 ~ UpdateContact ~ contact:", contact)
  const navigate = useNavigate()

  const handleAddContact = () => {
    console.log('Contact Added:', contact);
    navigate('/contact-present'); // Navigate to HomeScreen
  };

  return (
    <div className='page_decoration'>
      <Navigation />

      <div className='add-contact-page'>
        <Input
          labelName='Name' //type email
          inputType='text' //label name email
          inputName=''
          valuName={contact?.name}
          placeholder=''
        />
        <Input
          labelName='Email' //type email
          inputType='email' //label name email
          inputName=''
          placeholder=''
          valuName={contact.email}
        />
        <div className='add-contact-btn'>
          <Button
             btnName='Update Contact'
             handleChange={handleAddContact} 
             // onChange={onClick} 
          />
        </div>
      </div>

     

    </div>
  );
};

export default UpdateContact;
