import React from 'react';
import { NavLink } from 'react-router-dom';
// import Contact from './Contact';
// import Service from './Service';

function Home() {
  return (
    <div>
        <div className='links'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Service">Service</NavLink>
      </div>
      
    </div>
  )
}

export default Home