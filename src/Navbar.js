import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Centro Médico 
            <i class="fas fa-stethoscope"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/servicios'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Servicios
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/nosotros'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/contacto"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                
                Contacto
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Intranet
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Intranet</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
