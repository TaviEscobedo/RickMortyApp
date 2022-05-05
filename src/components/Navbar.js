import React from 'react'
import './Navbar.css';
import Logo from '../assets/rm_logo.png';

const Navbar = () => {
  return (
    <header>
            {/* <h1>Rick and Morty</h1> */}
            <img src={Logo} alt="Logo"/>
    </header>
  )
}

export default Navbar