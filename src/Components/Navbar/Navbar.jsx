import React, { useState } from 'react';
import './Navbar.css';
import menu_icon from '../../Assets/menu.png';
import menu_close from '../../Assets/menu_close.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to manage the menu open/close

  const handleScroll = (id) => {
    setMenu(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close the mobile menu after a menu item is clicked
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);  // Toggle the menu open/close state
  };
  

  return (
    <div className="navbar">
      <h1 className="logo">SV</h1>
      {/* Mobile Menu Icon */}
      <img 
        src={menu_icon} 
        alt="Menu" 
        height={30} 
        width={30} 
        className={`nav-mob-open ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu} 
      />
      {/* Navbar Links */}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Close Icon */}
        <img 
          src={menu_close} 
          alt="Close Menu" 
          height={30} 
          width={30} 
          className="nav-mob-close" 
          onClick={toggleMenu} 
        />
        <li>
          <p className={`anchor-link ${menu === 'home' ? 'active' : ''}`} onClick={() => handleScroll('home')}>Home</p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'about' ? 'active' : ''}`} onClick={() => handleScroll('about')}>About</p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'services' ? 'active' : ''}`} onClick={() => handleScroll('services')}>Services</p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'work' ? 'active' : ''}`} onClick={() => handleScroll('work')}>Work</p>
        </li>
        <li>
          <p className={`anchor-link ${menu === 'contact' ? 'active' : ''}`} onClick={() => handleScroll('contact')}>Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
