import { useState } from "react";
import StartGame from "./components/StartGame";

function App() {
  const [isGameStatrted, setGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <div>
      <StartGame></StartGame>
    </div>
  );
}

export default App;
