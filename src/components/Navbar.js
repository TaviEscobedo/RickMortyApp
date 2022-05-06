import React from 'react'
import './Navbar.css';
import Logo from '../assets/rm_logo.png';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
            {/* <h1>Rick and Morty</h1> */}
            <Link to="/" ><img src={Logo} alt="Logo" height={65}/></Link>
    </header>
  )
}

export default Navbar