import React, { useContext } from "react";
import Sibebar from "./components/Sibebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  console.log(track);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sibebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
