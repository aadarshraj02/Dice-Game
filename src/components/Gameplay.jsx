/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore(prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="headerSection">
        <TotalScore score={score}></TotalScore>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}></RollDice>
      <div className="btn">
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"}Show Rules
        </Button>
      </div>
      {showRules && <Rules></Rules>}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 50px;
  .headerSection {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btn {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    margin: 0 auto;
    gap: 10px;
    margin-top: 10px;
  }
`;
