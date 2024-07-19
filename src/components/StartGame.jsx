import styled from "styled-components";

function StartGame() {
  return (
    <Container>
      <img src="/dices.png" alt="" />
      <div>
        <h1>DICE GAME</h1>
      </div>
      <Button>Play Now</Button>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
`;
const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  border: none;
`;
