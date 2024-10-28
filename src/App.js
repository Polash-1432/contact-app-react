import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddContact from './AddContact/AddContact';
import ContactPresent from './ContactPresent/ContactPresent';
import SearchResult from './SearchResult/SearchResult';
import HomeScreen from './HomeScreen/HomeScreen';
// import NoContact from './Components/NoContact/NoContact';
import UpdateContact from './UpdateContact/UpdateContact';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes here */}
          <Route path="/" element={<HomeScreen />} /> {/* Home page */}
          <Route path="/contact-present" element={<ContactPresent />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/update-contact" element={<UpdateContact/>} />
          {/* <Route path="/NoContact" element={<NoContact />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
