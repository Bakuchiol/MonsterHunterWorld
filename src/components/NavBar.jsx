import React, { useState } from 'react'
// link
import { Link } from 'react-router-dom'
// logo
import logo from '../src_images/mh_logo.png'


function NavBar() {
  // state
  const [scroll, setScroll] = useState(false);

  // function scroll
  const navScroll = () => {
    if(window.scrollY >= 90) {
      setScroll(true)
      // return setScroll('white')
    } else{
      setScroll(false)
      // return setScroll('none')
    }
  }

  window.addEventListener('scroll', navScroll)

  // useEffect(() => {
  //   window.addEventListener('scroll', navScroll)
  //   // let nav = document.getElementById('navBar');
  //   // window.addEventListener('scroll', () => {
  //   //   if(window.scrollY > 100){
  //   //     nav.style.backgroundColor = 'white'
  //   //   }else{
  //   //     nav.style.backgroundColor = 'none'
  //   //   }
  //   // })
  // })


  return (
    <div className={ scroll ? 'navBar navBarBg' : 'navBar'}>
      <div className={scroll ? 'navLinks navLinksBg' : 'navLinks'}>
        <div>
          <Link to='/home'><img src={logo} alt="Monster Hunter" className='navLogo'/></Link>
          <h6>MONSTER WIKI</h6>
        </div>
        <div id='test'>
        <div className='navFlagTitle'>
          <Link to='/monsters'>
            <img src="https://www.monsterhunter.com/rise/assets/images/common/monster_ic.png" alt="icon" />
          </Link>
          {/* <p><Link>Monsters</Link></p> */}
        </div>
        <div className='navFlag'>
          <img src="http://www.monsterhunterworld.com/sp/images/common/bg_gNavi.png" alt="menuFlag" className='menuFlag'/>
        </div>
        </div>
        
      </div>
      {/* <hr /> */}
      
      {/* <p>name as logo</p>
      <p>LINKS to pages</p>
      <p>LINKS to pages</p> */}
    </div>
  )
}


export default NavBar
