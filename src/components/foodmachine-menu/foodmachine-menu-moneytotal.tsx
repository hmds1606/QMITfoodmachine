import React from "react";
import styled from "@emotion/styled";

interface Props {
  menuPrice: number;
  onClickReset: () => void;
}

const FoodMachineTotalMoney = ({ menuPrice, onClickReset }: Props) => {
  return (
    <TotalPriceWrapper>
      <div>충전액: {menuPrice.toLocaleString()}원</div>
      <button onClick={onClickReset}>금액 초기화</button>
    </TotalPriceWrapper>
  );
};

export default React.memo(FoodMachineTotalMoney);

const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
