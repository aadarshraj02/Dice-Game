import styled from "styled-components";

const NumberSelector = () => {
  const arrayNum = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {arrayNum.map((value, index) => (
        <Box key={index}>{value}</Box>
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
