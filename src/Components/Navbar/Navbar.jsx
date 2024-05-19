import React from 'react'
import './Navbar.css'
import logo from '../../assets/pex.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <div className='logo'
      >
      <img src={logo} />
      <p>Photoshop Website template</p>
      </div>
      <ul>
        <li>About</li>
        <li>How it Works</li>
        <li>Services</li>
        <li>Contact</li>
        <li className='search-bar'><input type='text' placeholder='Search...' /></li>
      </ul>
    </nav>
  )
}

export default Navbar
