import React from 'react'
import KeyBoardKey from './KeyBoardKey'

const Keyborad = ({sound,power,play}) => {
  
  return (
    <>
        {power ?
        sound.map((sound)=> <KeyBoardKey sound={sound}  play={play} />) :
        sound.map((sound)=><KeyBoardKey sound={{...sound,url:''}} power={power} play={play}  />)
        }
    </>
  )
}

export default Keyborad