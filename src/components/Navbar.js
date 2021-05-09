import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className='nav-item'>
            <Link to='/torneos' className='nav-links' onClick={closeMobileMenu}>
              TORNEOS
            </Link>
          </li>

        

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              FERNANDO PELOSO
            </Link>
          </li>
        </ul>

      </nav>
    </>
  );
}
