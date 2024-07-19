import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  return (
    <MainContainer>
      <div className="headerSection">
        <TotalScore></TotalScore>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <RollDice></RollDice>
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
`;
