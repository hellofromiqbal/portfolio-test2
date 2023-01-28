import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('#home');

  return (
    <nav className='navbar__fixed'>
      <div className="navbar__brand">
        <h1>FA.</h1>
      </div>
      <ul className="navigation__fixed">
        <li><a href="#home" className={active === '#home' ? 'active' : ''} onClick={() => setActive('#home')}>Home</a></li>
        <li><a href="#portfolio" className={active === '#portfolio' ? 'active' : ''} onClick={() => setActive('#portfolio')}>Portfolio</a></li>
        <li><a href="#about" className={active === '#about' ? 'active' : ''} onClick={() => setActive('#about')}>About</a></li>
        <li><a href="#services" className={active === '#services' ? 'active' : ''} onClick={() => setActive('#services')}>Services</a></li>
        <li><a href="#contact" className={active === '#contact' ? 'active' : ''} onClick={() => setActive('#contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}
 
export default Navbar;