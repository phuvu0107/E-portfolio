import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/Me-removed-bg.png';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Truong Phu Vu</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        
        <CTA />
        <HeaderSocials />
        
        <div className='myself'>
          <img className='personal-img' src={ME} alt='Me' />
        </div>

        <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header