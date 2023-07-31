import React from 'react'
// link
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div id='navBar'>
      <div className='navLinks'>
        <h1>NAME HERE???</h1>
        <ul className='navUl'>
          <li><Link>Projects</Link></li>
          <li><Link>About</Link></li>
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
