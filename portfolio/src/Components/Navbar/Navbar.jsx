import React from 'react';
import '../Navbar/Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_icon from '../../Assets/menu.png'
import menu_close from '../../Assets/menu_close.png'

const Navbar = () => {
  const [menu, setMenu] = React.useState('home');

  return (
    <div className="navbar">
      <h1 className='logo'>SV</h1>
      <img src={menu_icon} alt="" height={20} width={20} className='nav-mob-open'/>
      <ul className="nav-menu">
        <img src={menu_close} alt="" height={30} width={30} className='nav-mob-close' />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Work</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      {/* <div className="nav-connect">
        Connect With Me
      </div> */}
    </div>
  );
};

export default Navbar;
