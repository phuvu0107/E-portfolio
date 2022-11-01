import React from 'react';
import './navbar.css';
import {HiHome} from 'react-icons/hi';
import {FaUserTie} from 'react-icons/fa';
import {BsFillBookmarkCheckFill} from 'react-icons/bs';
import {HiOutlineCode} from 'react-icons/hi';
import {RiContactsBookFill} from 'react-icons/ri';
import { useState } from 'react';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('#');
  const onClickItem = item => {
    setActiveNavItem(item);
  }
  return (
    <nav>
      <a href='#about' onClick={() => onClickItem('#about')} className={activeNavItem === '#about' ? 'active' : ''}><FaUserTie/></a>
      <a href='#experience' onClick={() => onClickItem('#experience')} className={activeNavItem === '#experience' ? 'active' : ''}><BsFillBookmarkCheckFill/></a>
      <a href='#header' onClick={() => onClickItem('#')} className={activeNavItem === '#' ? 'active' : ''}>
        <HiHome/>
      </a>
      <a href='#services' onClick={() => onClickItem('#services')} className={activeNavItem === '#services' ? 'active' : ''}><HiOutlineCode/></a>
      <a href='#contact'><RiContactsBookFill/></a>
    </nav>
  )
}

export default Navbar