import styled from "styled-components";
import { useState } from "react";

function RollDice() {
  const [currentDice, setCurrentDice] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <DiceContainer>
      <div className="dice">
        <img src="../../public/dices/dice_1.png" alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    margin-top: 24px;
  }
`;
