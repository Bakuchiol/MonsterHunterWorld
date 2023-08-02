import React from 'react'
// css
import './home.css'
import MainLayout from '../../layout/MainLayout'
import carousel from '../../monster_images/carouselConsole'
import IndexPage from '../../components/IndexPage'
import TestComp from '../../components/TestComp'
import TestyComp from '../../components/TestyComp'

console.log('imagesCarousel', carousel)

function Index() {
  return (
    <MainLayout>
        {/* carousel */}
      <IndexPage images={carousel}/>
      <TestComp />
      <TestyComp />

        {/* carousel */}
      {/* <div id='homePage'>
        <img src="https://www.monsterhunter.com/rise/assets/images/common/monster_ic.png" alt="" />
        <div className="homeHistory">
          <h1>HOMEPAGE</h1>
          <p>one page parallax?(portfolio)</p>
          <p>1. header - FIXED</p>
          <p>2. main top - banner (introduction)</p>
          <p>3. PROJECTS(for portfolio)</p>
          <p>4. footer</p>
          <p>5. carousel</p>
          <p>6. brief intro to game</p>
          <p>7. history? from series: monster hunter <br /> expansion: MH world-iceborn</p>
          <p>8. styling - parallax/cut per section/component?</p>
          <p>9. history?</p>
      <img src="http://www.monsterhunterworld.com/sp/images/common/border_section.png" alt="" />
      <div className='testing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea, eveniet nemo sit molestiae eius?</div>
        </div>
    </div> */}
    </MainLayout>
  )
}

export default Index
