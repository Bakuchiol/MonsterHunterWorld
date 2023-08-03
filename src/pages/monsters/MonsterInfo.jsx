import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import './monsterStyle.css'
// appcontext
// import { AppContext } from '../../context/app_context'
// axios
import axios from 'axios'
// use location
import { useLocation } from 'react-router-dom'


function MonsterInfo(props) {
  // state
  const [monsterInfo, setMonsterInfo] = useState()

  // context
  // let { getMonsterInfo } = useContext(AppContext);
  // let { url } = useContext(AppContext)
  // let { setUrl } = useContext(AppContext)

  // location
  let location = useLocation()

  // function getMonsterInfo(monsterID){
  //   return fetch(`https://mhw-db.com/monsters/${monsterID}`)
  //   .then(response => response.json)
  // }

  const getMonsterInfo = async(monsterID) => {
    // return fetch(`https://mhw-db.com/monsters/${monsterID}`)
    // .then(response => response.json)
    const response = await axios.get(`https://mhw-db.com/monsters/${monsterID}`)
    let info = await response.data
    setMonsterInfo(info)
}



  useEffect(() => {
    getMonsterInfo(location.state.monster.id)
    // .then(monsterData => setMonsterInfo(monsterData))
  },[])

  console.log('monsterInfo',monsterInfo)
  return (
    <MainLayout>
      <div id='monsterInfoWrap'>
        <div className='monsterRow'>
          <p className='monsTitle'>NAME</p>
          <div className="monsInfo">
            <p>{monsterInfo?.id}. <span>{monsterInfo?.name}</span></p>
          </div>
        </div>
        <div className="monsterRow">
          <p className='monsTitle'>TYPE</p>
          <div className="monsInfo">
            <p>{monsterInfo?.type}</p>
          </div>
        </div>
        <div className="monsterRow">
          <p className='monsTitle'>SPECIES</p>
          <div className="monsInfo">
            <p>{monsterInfo?.species}</p>
          </div>
        </div>
        <div className="monsterRow">
          <p className='monsTitle'>DESCRIPTION</p>
          <div className="monsInfo">
            <p>{monsterInfo?.description}</p>
          </div>
        </div>
        <div className="monsterRow">
          <p className='monsTitle'>LOCATIONS</p>
          <div className="monsInfo">
            {monsterInfo?.locations.map((loc) => (
                <p>{loc.name}</p>
              ))}
          </div>
        </div>
        <div className="monsterRow">
          <p className='monsTitle'>ELEMENTS</p>
          <div className="monsInfo">
            <p>elements: {monsterInfo?.elements}</p>
          </div>
        </div>
        <div className="monsterRow">
          <p className='monsTitle'>WEAKNESSES</p>
          <div className="monsInfo">
              {monsterInfo?.weaknesses.map((loc) => (
                <p>{loc.element}</p>
              ))}
          </div>
        </div>
        <div className="monsterRow">
          <p className='monsTitle'>AILMENTS</p>
          <div className="monsInfo">
            {monsterInfo?.ailments.map((loc) => (
                <div className='infoMap'>
                  <p>{loc.name}</p>
                  <p>{loc.description}</p>
                </div>
            ))}
          </div>
        </div>
        <div className="monsterRow">
          <p className='monsTitle'>REWARDS</p>
          <div className="monsInfo">
            {monsterInfo?.rewards.map((loc) => (
              <div className='infoMap'>
                <p>{loc.item.name}</p>
              </div>
            ))}
          </div>
        </div>



          {/* infos */}
        {/* attempt */}
        {/* attempt */}
    </div>
    </MainLayout>
  )
}

export default MonsterInfo
