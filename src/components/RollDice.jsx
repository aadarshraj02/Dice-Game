import styled from "styled-components";

function RollDice({ currentDice, rollDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/dices/dice_${currentDice}.png`} alt="" />
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
