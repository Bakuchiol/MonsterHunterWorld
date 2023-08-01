import React from 'react'
// link
import { Link } from 'react-router-dom'
// logo
import logo from '../src_images/mh_logo.png'

function NavBar() {
  return (
    <div id='navBar'>
      <div className='navLinks'>
        <div>
          <Link to='/home'><img src={logo} alt="Monster Hunter" className='navLogo'/></Link>
          <h6>MONSTER WIKI</h6>
        </div>
        <ul className='navUl'>
          <li><Link to='/monsters'>Monsters</Link></li>
          <li>*change BG color*</li>
        </ul>
        <div className='navFlag'>
          <p className='navFlagTitle'>MENU</p>
          <img src="http://www.monsterhunterworld.com/sp/images/common/bg_gNavi.png" alt="menuFlag" className='menuFlag'/>
        </div>
      </div>
      <hr />
      
      {/* <p>name as logo</p>
      <p>LINKS to pages</p>
      <p>LINKS to pages</p> */}
    </div>
  )
}

export default NavBar
