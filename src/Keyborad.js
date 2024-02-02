import React from 'react'
import KeyBoardKey from './KeyBoardKey'

const Keyborad = ({sound,power,play}) => {
  
  return (
    <>
        {power ?
        sound.map((sound)=> <KeyBoardKey key={sound.id} sound={sound}  play={play} />) :
        sound.map((sound)=><KeyBoardKey key={sound.id} sound={{...sound,url:''}} power={power} play={play}  />)
        }
    </>
  )
}

export default Keyborad