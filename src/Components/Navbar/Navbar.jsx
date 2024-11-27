import React from 'react';
import './Navbar.css';
import menu_icon from '../../Assets/menu.png';
import menu_close from '../../Assets/menu_close.png';

const Navbar = () => {
  const [menu, setMenu] = React.useState('home');

  const handleScroll = (id) => {
    setMenu(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="navbar">
      <h1 className="logo">SV</h1>
      <img src={menu_icon} alt="" height={20} width={20} className="nav-mob-open" />
      <ul className="nav-menu">
        <img src={menu_close} alt="" height={30} width={30} className="nav-mob-close" />
        <li>
          <p className="anchor-link" onClick={() => handleScroll('home')}>
            Home
          </p>
        </li>
        <li>
          <p className="anchor-link" onClick={() => handleScroll('about')}>
            About
          </p>
        </li>
        <li>
          <p className="anchor-link" onClick={() => handleScroll('services')}>
            Services
          </p>
        </li>
        <li>
          <p className="anchor-link" onClick={() => handleScroll('work')}>
            Work
          </p>
        </li>
        <li>
          <p className="anchor-link" onClick={() => handleScroll('contact')}>
            Contact
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
