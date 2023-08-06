import React from 'react'
// style
import './landing.css'
// link
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <div id='landing'>
      {/* <h1>LANDING PAGE</h1> */}
      <div className="portName">
        <img src="https://www.monsterhunterworld.com/images/gate/logo.png" alt="mhLogo" className='mhLogo'/>
        <div className="portBtn">
          <button><Link to='/home'>ENTER</Link></button>
        <div className="footerLinks">
          <ul className='footerUl'>
            <li><a href='https://mhw-db.com'>Monster Hunter World API</a></li>
            <li><a href='https://github.com/Bakuchiol/MonsterHunterWorld'>Link to Repository</a></li>
          </ul>
          <p>All trademarks referenced herein are the properties of their respective owners.</p>
          <p>©CAPCOM CO., LTD. 2018 ALL RIGHTS RESERVED.</p>
        </div>
        
      </div>
    </div>
      
    </div>
  )
}

export default Landing
