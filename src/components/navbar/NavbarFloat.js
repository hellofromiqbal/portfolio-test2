import './navbarfloat.css';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFileSearch } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { HiOutlineChat } from 'react-icons/hi';

const NavbarFloat = () => {
  const [active, setActive] = useState('#home');

  return (
    <nav className='navbar__float'>
      <ul className="navigation__float">
        <li><a href="#home" className={active === '#home' ? 'active' : ''} onClick={() => setActive('#home')}><AiOutlineHome /></a></li>
        <li><a href="#portfolio" className={active === '#portfolio' ? 'active' : ''} onClick={() => setActive('#portfolio')}><AiOutlineFileSearch /></a></li>
        <li><a href="#about" className={active === '#about' ? 'active' : ''} onClick={() => setActive('#about')}><AiOutlineUser /></a></li>
        <li><a href="#services" className={active === '#services' ? 'active' : ''} onClick={() => setActive('#services')}><RiServiceLine /></a></li>
        <li><a href="#contact" className={active === '#contact' ? 'active' : ''} onClick={() => setActive('#contact')}><HiOutlineChat /></a></li>
      </ul>
    </nav>
  );
}
 
export default NavbarFloat;