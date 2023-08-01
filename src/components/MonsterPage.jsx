import React from 'react'
import Monster from '../pages/monsters/Monster'

function MonsterPage() {
  return (
    <div id='monsterPage'>
      <Monster />
      {/*
          TO DO:
          1. ADD ANOTHER COMPONENT?
          2. IMAGES? FROM MODELS?
       */}
      {/* {props.monsters.map((monster) => (
        <div>
          <p>{monster.name}</p>
        </div>
      ))} */}
    </div>
  )
}

export default MonsterPage
