import { useState } from "react";
import StartGame from "./components/StartGame";
import Gameplay from "./components/Gameplay";

function App() {
  const [isGameStarted, setGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? (
        <Gameplay></Gameplay>
      ) : (
        <StartGame toggle={toggleGamePlay}></StartGame>
      )}
    </div>
  );
}

export default App;
