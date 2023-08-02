import React, { useEffect, useState } from 'react'
// cant import home.css
// style @ app.css


function IndexPage({images}) {
  // state
  const [currentPic, setCurrentPic] = useState(0)

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      nextImg();
    }, 8000);
  });

  // function
  const nextImg = () => {
    if(currentPic === images.length - 1){
      setCurrentPic(0)
    }else{
      setCurrentPic(currentPic + 1)
    }
  };

  const prevImg = () => {
    if(currentPic === 0){
      setCurrentPic(images.length -1)
    }else{
      setCurrentPic(currentPic - 1)
    }
  };

  console.log("currentPic:::",currentPic)

  return (
    <div id='carousel'>
      <div className="carouselWrapper">
        {images.map((card, i) => {
          return (
            <div key={i} className={i === currentPic ? 'card cardActive' : 'card'}>
              <img src={card.pic} alt="monsters" className='carouselImg'/>
              <div className="cardTextBox">
                <h1 className='cardTitle'>{card.desc}</h1>
              </div>
            </div>
          );
        })}
      <div className="arrowLeft" onClick={prevImg}>&lsaquo;</div>
      <div className="arrowRight" onClick={nextImg}>&lsaquo;</div>
      </div>
    </div>
  )
};

export default IndexPage
