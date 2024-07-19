import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrayNum = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <div>
      {arrayNum.map((value, index) => (
        <Box key={index} onClick={() => setSelectedNumber(value)}>
          {value}
        </Box>
      ))}
    </div>
  );
};

export default NumberSelector;

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
`;
