import styled from "styled-components";

function StartGame() {
  return (
    <Container>
      <img src="/dices.png" alt="" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
`;
