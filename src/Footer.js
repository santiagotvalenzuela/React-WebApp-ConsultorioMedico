import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Suscribite a nuestro Newsletter para recibir mas información
        </p>
        <p className='footer-subscription-text'>
          Podes hacerlo en cualquier momento
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu Email'
            />
            <Button buttonStyle='btn--outline'>Subscribirse</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Páginas</h2>
            <Link to='/'>Home</Link>
            <Link to='/servicios'>Servicios</Link>
            <Link to='/nosotros'>Nosotros</Link>
            <Link to='/contacto'>Beneficios</Link>
          </div>
          <div class='footer-link-items'>
          <h2>Nosotros</h2>
            <Link to='/nosotros'>La Empresa</Link>
            <Link to='/Servicios'>Planes</Link>
            <Link to='/nosotros'>Sucursales</Link>
            <Link to='/contacto'>Contacto</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Seguinos</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Centro Médico
              <i class="fas fa-stethoscope"/>
            </Link>
          </div>
          <small class='website-rights'>Centro Médico Caballito © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
