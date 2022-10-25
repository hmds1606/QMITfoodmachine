import styled from "@emotion/styled";

export default function FoodMachineMainTitle() {
  return <MainTitle>음식 자판기</MainTitle>;
}

const MainTitle = styled.h3`
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
`;
