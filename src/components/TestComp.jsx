import React from 'react'

function TestComp() {
  return (
    <div>
        <div id='homePage'>
          <img src="http://www.monsterhunterworld.com/sp/images/common/border_section.png" alt="border" className='border'/>
        <div className="homeHistory">
          <div className="mhStory">
            <p>
              <span style={{marginLeft: '5rem'}}>{' '}</span>The world of <span className='mhTitle'>Monster Hunter</span> is filled with vibrant landscapes, 
              and even more unique creatures called "<span>monsters</span>". These destructive 
              animals often come in conflict with civilization, threatening people that trespass 
              on their territory, make their homes in bad positions, and 
              even raiding villages for food. You play as a "<span>Hunter</span>", a person 
              who has trained their entire life to combat down these creatures when needed, whether 
              for renown or the sake of a greater cause.
            </p>
            <p>
              Of course, to better fight your marks, one must learn more about the creatures in question, 
              strengthen your armaments with the spoils of war, and continue honing your hunting skills...
            </p>
          </div>
          {/* ------- */}
      {/* <img src="http://www.monsterhunterworld.com/sp/images/common/border_section.png" alt="" />
      <div className='testing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea, eveniet nemo sit molestiae eius?</div> */}
        </div>
    </div>
      
    </div>
  )
}

export default TestComp
