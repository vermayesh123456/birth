import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <li><Link to="/"> {/* Use Link instead of <a> */}
        <button type="button" className="btn btn-white">Happy Birthday</button>
      </Link></li>
      </div>
      <ul className="nav-links">
        <li><Link to="/birthday"> {/* Use Link instead of <a> */}
        <button type="button" className="btn btn-white">Countdown</button>
      </Link></li>
      </ul>
      <ul className="nav-links">
        <li><Link to="/birthday-message"> {/* Use Link instead of <a> */}
        <button type="button" className="btn btn-white">Surprise</button>
      </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
