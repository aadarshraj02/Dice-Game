import styled from "styled-components";

function RollDice() {
  return (
    <DiceContainer>
      <div>
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

  p {
    font-size: 24px;
    font-weight: 500;
    margin-top: 24px;
  }
`;
