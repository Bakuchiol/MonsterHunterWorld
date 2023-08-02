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
  const [monsterInfo, setMonsterInfo] = useState({})

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
        {/* attempt */}
        <p>?</p>
        <p>{monsterInfo?.name}</p>
        <p>{monsterInfo?.type}</p>
        <p>{monsterInfo?.species}</p>
        <p>{monsterInfo?.description}</p>
        {/* <p>{monsterInfo?.['locations']['name']}</p> */}
        <p>{monsterInfo?.['weaknesses'][0]['element']}</p>
        {/* <p>WEAKNESSES:
          <ul>
            <li>{monsterInfo?.['weaknesses'][0]['element']}</li>
            <li>{monsterInfo?.['weaknesses'][1]['element']}</li>
            <li>{monsterInfo?.['weaknesses'][1]['element']}</li>
          </ul>
        </p> */}
        {/* attempt */}
      {/* <p>1. monster stats? table?</p>
      <ol>
        <li>name</li>
        <li>species</li>
        <li>desc</li>
        <li>location</li>
        <li>weaknesses</li>
        <li>rewards</li>
      </ol> */}
    </div>
    </MainLayout>
  )
}

export default MonsterInfo
