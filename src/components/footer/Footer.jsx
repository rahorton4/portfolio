import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo'>
        RACHEL HORTON
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#header'>Home</a>
        </li>
        <li>
          <a href='#experience'>Experiences</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contacts</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'>
          <FaFacebookF />
        </a>
        <a href='https://instagram.com'>
          <FiInstagram />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022 Rachel Horton</small>
      </div>
    </footer>
  );
};

export default Footer;
