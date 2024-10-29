import React from 'react';
import '../Card/Card.css';
import Button from '../Button/Button';

const Card = ({ name, email, onClick }) => {
  return (
    <div className='card_section'>
      <div className='card_body'>
        <div className='image_contact'>
          <img src="./image/contact.png" alt="contact logo" />
        </div>
        <div className="text_section">
          <p>{name}</p>
          <span>{email}</span>
        </div>
        <div className='btn_icon'>
          {/* Pass `onClick` to the edit button */}
          <Button 
            image={<img src="./image/edit.png" alt="Edit logo" />}
            handleChange={onClick} // Pass the onClick function here
          />     
          <Button 
            image={<img src="./image/delete.png" alt="Delete logo" />}
            handleChange={() => alert('Delete button clicked')} // Separate handler for delete
          />     
        </div>
      </div>
    </div>
  );
};

export default Card;
