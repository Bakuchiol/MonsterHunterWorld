import React from 'react'
// link
import { Link } from 'react-router-dom'
// logo
import logo from '../src_images/mh_logo.png'

function NavBar() {
  return (
    <div id='navBar'>
      <div className='navLinks'>
        <img src={logo} alt="Monster Hunter" className='navLogo'/>
        <ul className='navUl'>
          <li><Link to='/monsters'>Monsters</Link></li>
          <li><Link>Weapons</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
      </div>
      <hr />
      
      {/* <p>name as logo</p>
      <p>LINKS to pages</p>
      <p>LINKS to pages</p> */}
    </div>
  )
}

export default NavBar
