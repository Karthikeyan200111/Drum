import React from 'react'

const Drum = ({ power, name, stop, handleVolume, changeSound, volume }) => {
    return (
        <>
            <button
                className="text-white my-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 md:font-medium rounded-lg md:text-sm md:px-7 md:py-3 text-sm  py-1 px-3 text-center me-2 mb-2 font-medium"
                onClick={stop}>TURN POWER {power ? 'OFF' : 'ON'}</button>
            <h2 className='font-bold md:text-xl text-sm my-3'>Volume %{Math.round(volume * 100)}</h2>
            <input
                max="1"
                min="0"
                step="0.01"
                type="range"
                value={volume}
                onChange={handleVolume}
            />
            <h2 className='font-bold md:text-xl text-sm my-3'>{name}</h2>
            <button
                className="text-white my-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 md:font-medium rounded-lg md:text-sm md:px-7 md:py-3 text-sm  py-1 px-3 text-center me-2 mb-2 font-medium mb-4"
                onClick={changeSound}>CHANGE SOUND</button>
        </>
    )
}

export default Drum