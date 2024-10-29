import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPresent.css';
import Card from '../Components/Card/Card';
import Navigation from '../Components/Navigation/Navigation';

const ContactPresent = () => {
  const navigate = useNavigate();

  // Use array destructuring with useState
  const [contacts, setContacts] = useState([]); // Corrected syntax
  const [loading, setLoading] = useState(true); // Corrected syntax

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdateContact = (contact) => {
    navigate('/update-contact', { state: { contact } });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='page_decoration'>
      <Navigation text='Search Contact' />
      <div className='card_page'>
        {contacts.map((contact) => (
          <Card 
            key={contact.id}
            name={contact.name} 
            email={contact.email} 
            onClick={() => handleUpdateContact(contact)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPresent;
