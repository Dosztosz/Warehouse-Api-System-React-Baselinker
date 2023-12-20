// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src="../img/ds.PNG"/>
      <ul className='nav-list'>
        <Link className='nav-item' to="/">
          <li className='nav-item-wrapper'>Home</li>
        </Link>
        <Link className='nav-item' to="/Warehouse">
          <li className='nav-item-wrapper'>Warehouse</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;