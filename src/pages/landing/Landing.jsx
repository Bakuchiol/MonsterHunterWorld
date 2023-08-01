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
        {/* <h1>LYNETTE ANNE CARGO</h1>
        <p>PORTFOLIO</p> */}
        <div className="portBtn">
        <button><Link to='/home'>ENTER</Link></button>
        <p style={{color: "lime"}}>TO DO: LINK TO HOME PAGE!</p>
        <p style={{color: "lime"}}>TO DO: STYLE BUTTON!</p>
        <p style={{color: "lime"}}>TO DO: add mini footer <br /> disclaimer: this is a fan made website
        <br /> link to official website, api used!</p>
        <hr />
        <ul className='footerUl'>
        <li><a href='https://mhw-db.com'>Monster Hunter World API</a></li>
        <li><a href='https://github.com/Bakuchiol/MonsterHunterWorld'>Link to Repository</a></li>
        </ul>
        <p>All trademarks referenced herein are the properties of their respective owners.</p>
        <p>©CAPCOM CO., LTD. 2018 ALL RIGHTS RESERVED.</p>
      </div>
    </div>
      
    </div>
  )
}

export default Landing
