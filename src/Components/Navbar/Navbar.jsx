import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/pex.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='container'>
      <div className='logo'>
        <a href="#hero"><img src={logo} alt="Logo" /></a>
        <p>Photoshop Website template</p>
        <span className="menu-toggle" onClick={handleToggle}>&#9776;</span>
      </div>
      <ul className={isOpen ? 'show' : ''}>
        <li><a href="#about">About</a></li>
        <li><a href="#part">How it Works</a></li>
        <li><a href="#team">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className='search-bar'><input type='text' placeholder='Search...' /></li>
      </ul>
    </nav>
  )
}

export default Navbar
