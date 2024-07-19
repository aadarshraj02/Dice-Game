/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

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
        <Button>Reset Score</Button>
        <Button>Show Rules</Button>
      </div>
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
