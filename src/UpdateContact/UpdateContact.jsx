import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../Components/Input/Input';
import Navigation from '../Components/Navigation/Navigation';

const UpdateContact = () => {
  const location = useLocation();
  const contact = location.state?.contact; // Access the passed contact data
  const navigate = useNavigate()

  const handleAddContact = () => {
    console.log('Contact Added:', contact);
    navigate('/contact-present'); // Navigate to HomeScreen
  };

  return (
    <div className='page_decoration'>
      <Navigation />
      <Input 
          text='Update Contact' 
          name={contact.name} 
          email={contact.email} 
          contactChange={handleAddContact} // Pass handleAddContact as a prop
        />
     
    </div>
  );
};

export default UpdateContact;
