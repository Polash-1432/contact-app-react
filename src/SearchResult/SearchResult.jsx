import React, { useState } from 'react';
import Card from '../Components/Card/Card';
import './SearchResult.css';

const SearchResult = ({ contacts }) => {
  const [query, setQuery] = useState('');

  // Filter contacts based on the query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase()) ||
    contact.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='page_decoration'>
      <input
        type="text"
        placeholder="Search by name or email"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />


      <div className="card-container">
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <Card key={contact.id} name={contact.name} email={contact.email} />
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
