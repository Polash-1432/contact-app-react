import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Components/Navigation/Navigation';
import Input from '../Components/Input/Input';

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
      <Input 
        text='Add Contact' 
        name={contact.name} 
        email={contact.email} 
        handleChange={handleChange}
        contactChange={handleAddContact} // Pass handleAddContact as a prop
      />
    </div>
  );
};

export default AddContact;
