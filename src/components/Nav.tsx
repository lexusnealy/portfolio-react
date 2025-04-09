import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on click
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      {/* Hamburger Icon */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu items */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
