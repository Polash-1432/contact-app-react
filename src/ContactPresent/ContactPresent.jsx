import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPresent.css';
import Card from '../Components/Card/Card';
import Navigation from '../Components/Navigation/Navigation';

const ContactPresent = () => {
  const navigate = useNavigate();

  const contacts = [
    { id: 1, name: 'Polash', email: 'hello@polash.com' },
    { id: 2, name: 'Polash2', email: 'hello@polash.com2' },
    { id: 3, name: 'Polash3', email: 'hello@polash.com3' },
    { id: 4, name: 'Polash4', email: 'hello@polash.com4' }
  ];

  const handleUpdateContact = (contact) => {
    navigate('/update-contact', { state: { contact } });
  };

  return (
    <div className='page_decoration'>
      <Navigation text='Search Contact' />
      <div className='card_page'>
        {contacts.map((contact) => (
          <Card 
            key={contact.id}
            name={contact.name} 
            email={contact.email} 
            onClick={() => handleUpdateContact(contact)} // Pass as a function
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPresent;
