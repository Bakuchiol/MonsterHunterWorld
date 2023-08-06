import React from 'react'

import nergigante from '../images/Nergigante.png'
import rathian from '../images/Pinkrathian.png'
import xeno from '../images/Xeno.png'


function TestyComp() {
  return (
    <div id='testyTest'>
        <img src="http://www.monsterhunterworld.com/sp/images/common/border_section.png" alt="" />
          <p>MONSTER HIGHLIGHT COMP</p>
          <div className="monsterWrap">
        <div className='testingBox'>
          <div className="rathianBox">
            <img src={rathian} alt="" className='monsterImg'/>
            <div className="rathianDesc">
              <h1>PINK RATHIAN</h1>
              <p>
              A subspecies of the standard Rathian with vibrant pink scales, 
              Pink Rathians have harder scales on different body parts 
              compared to their lower ranked counterparts. They can also use their poison tipped tails 
              more skillfully, creating a greater threat for both hunters and their prey.
                <sub><a href="https://www.ign.com/wikis/monster-hunter-world/Pink_Rathian">-ign.com</a></sub>
              </p>
            </div>
          </div>
          <div className="nergiganteBox">
            <img src={nergigante} alt="" className='monsterImg'/>
            <div className="nergiganteDesc">
              <h1>NERGINANTE</h1>
              <p>
              Classified as an Elder Dragon, Nergigante possesses six limbs like others of this class (four legs, and two wings). 
              Its body is covered in thick black scales and has two massive horns on the front of its face. 
              Able to regenerate at a rapid rate, Nergigante's spikes when hit off will initally regenerate as white before 
              hardening into their black final form. Once its spike have hardened on its appendages, more damage will be dealt 
              towards the player in its swipes and slashes. An overly aggresive monster, Nergigante will continually chase those 
              who dare to attack it.
              </p>
              <sub><a href="https://www.ign.com/wikis/monster-hunter-world/Nergigante_-_Weaknesses,_Tips,_Drop_Rates">-ign</a></sub>
            </div>
          </div>
          <div className="xenoBox">
            <img src={xeno} alt="" className='monsterImg'/>
            <div className="xenoDesc">
              <h1>XENO'JIIVA</h1>
              <p>Elder Dragon</p>
              <p>
              An Elder Dragon born of the growing stores of energy being sucked into the Elder's Recess, 
              Xeno'jiiva is a massive translucent monster. It's newborn status will see it making mistakes 
              often when fighting hunters, such as attacking the ground beneath it and falling into the hole created, 
              leaving it open to attack. Though just born, its power is a world-ending threat to the New World. 
              Take it down hunter!
              <sub><a href="https://www.ign.com/wikis/monster-hunter-world/Xeno%27jiiva">-ign.com</a></sub>
              </p>
            </div>
          </div>
          </div>
        </div>

    </div>
  )
}

export default TestyComp
