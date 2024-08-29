import React from 'react'
import PlayerCard from './PlayerCard'
import {players} from './Players'

const PlayersList = () => {
  return (
    <div className='grid grid-cols-3 my-3 gap-4' >
        {
            players.map((player , i) => (
                <div  key={i} >
                    <PlayerCard  player={player} />
                </div>
                
            ))
        }
    </div>
  )
}

export default PlayersList