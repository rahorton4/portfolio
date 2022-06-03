import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/graduation1.png';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Rachel Horton</h1>
        {/* <h5 className='text-light'>Front-End Developer</h5> */}
        <h5>Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* insert image of yourself once obtained */}
        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
