import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import NoContact from '../Components/NoContact/NoContact';
// import { useNavigate } from 'react-router-dom';
// import Buttton from '../Components/Button/Button';

const HomeScreen = () => {


  return (
    <div className='page_decoration'>
      <Navigation />
      <NoContact/>
    </div>
  );
};

export default HomeScreen;
