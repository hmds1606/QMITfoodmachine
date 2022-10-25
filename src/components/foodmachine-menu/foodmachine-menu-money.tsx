import styled from "@emotion/styled";
import React, { useCallback } from "react";

interface Props {
  onClickMoney: (price: number) => void;
  prices: number[];
}

const FoodMachineMenuMoney = ({ onClickMoney, prices }: Props) => {
  return (
    <div>
      <Prices>
        {prices.map((price) => (
          <Price onClick={() => onClickMoney(price)} key={price}>
            {price.toLocaleString()}원
          </Price>
        ))}
      </Prices>
    </div>
  );
};

export default React.memo(FoodMachineMenuMoney);

const Prices = styled.ul`
  margin: 0;
  padding: 0;
  width: 230px;
  height: 130px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-collapse: separate;
  border-top: 2px solid #ff9f9f;
  border-left: 2px solid #ff9f9f;
  margin-bottom: 10px;
`;

const Price = styled.li`
  border-right: 2px solid #ff9f9f;
  border-bottom: 2px solid #ff9f9f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
