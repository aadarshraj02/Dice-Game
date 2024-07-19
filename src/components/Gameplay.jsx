import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const Gameplay = () => {
  return (
    <MainContainer>
      <div className="headerSection">
        <TotalScore></TotalScore>
        <NumberSelector></NumberSelector>
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
`;
