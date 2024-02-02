import React, { useEffect } from "react";

const KeyBoardKey = ({
  play,
  sound: { id, key, url, keyCode },
}) => {
  const handleKeyDown = (e) => {
    if (keyCode === e.keyCode) {
      if (url !== '') {
        play(key, id);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClick = () => {
    if (url !== '') {
      
      play(key, id);
    }
  };

  return (
    <>
      <button
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 md:font-medium rounded-lg md:text-md md:px-8 md:py-4 py-1 px-1 text-center me-2 mb-2 text-sm"
        id={keyCode}
        onClick={handleClick}
      >
        {url !== '' && <audio src={url} id={key}></audio>}
        {key}
      </button>
     
    </>
  );
};

export default KeyBoardKey;
