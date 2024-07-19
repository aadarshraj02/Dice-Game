
import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const arrayNum = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <div className="flexContainer">
        {arrayNum.map((value, index) => (
          <Box
            isSelected={value == selectedNumber}
            key={index}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 5px;
  .flexContainer {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
