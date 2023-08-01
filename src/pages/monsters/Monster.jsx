import React, { useContext, useState, useEffect } from 'react'
// style
import './monsterStyle.css'
import MainLayout from '../../layout/MainLayout'
// context
import { AppContext } from '../../context/app_context'
// array
import monsters from '../../monster_images/monsterIcons'

console.log("monster picss",monsters)

// axios
// import axios from 'axios'
// import MonsterPage from '../../components/MonsterPage'



function Monster() {
    // context
    let { fetchMonsters } = useContext(AppContext);
    let { url } = useContext(AppContext)

    // state
    // const [monsters, setMonsters] = useState([])
    // // axios
    // const fetchMonsters = async() => {
    //     const response = await axios.get(`https://mhw-db.com/monsters`);
    //     let info = await response.data
    //     console.log('list of monsters',[info])
        
    //     setMonsters(info)
    // }


    // fetch api
    useEffect(()=>{
        fetchMonsters();
    },[])

    // console.log("monsters2", {monsters})


    return (
        <MainLayout>
            <div id='monsterWrap'>
                <h1>MONSTER PAGE</h1>
                <h4>TO DOS:</h4>
                <p>1. map info here</p>
                <p>2. *TRY* to link imgs</p>
                <p>3. useEffect on nav and foot</p>
                {/* -----------------REGULAR AXIOS------------------------ */}
                {/* <div>
                    <MonsterPage monsters={monsters} />
                </div> */}
                {/* -----------------REGULAR AXIOS------------------------ */}
                {/* --------------USE CONTEXT---------------- */}
                <div className='monsters'>
                    {url ? (
                        url.map((monster,i) => {
                            return (
                                <div key={i}>
                                    <p>{monster.id}.--{monster.name}</p>
                                </div>
                            )
                        })                        
                    ): (
                        <h2>LOADING ...</h2>
                    )}
                </div>
                {/* --------------USE CONTEXT------------------ */}
                {/* --------------images array------------------ */}
                    {monsters.map((img, i) => {
                        console.log('one pic', img)
                        return (
                            <div>
                                {img.id}
                                <img key={i} src={img.pic} alt="pic" className='monsterPic'/>
                            </div>
                        )
                    })}


                {/* --------------images array------------------ */}
            </div>
        </MainLayout>
    )
}

export default Monster
