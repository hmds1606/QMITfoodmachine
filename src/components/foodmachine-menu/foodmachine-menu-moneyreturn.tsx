import { useState } from "react";
import { useRecoilState } from "recoil";
import { MenuPriceState, selectedMenuState } from "../../common/atom";
import styled from "@emotion/styled";

interface Props {
  menuPrice: number;
  reversePrices: number[];
}

interface Change {
  value: number;
  count: number;
}

export default function FoodMachineMenuMoneyReturn({
  menuPrice,
  reversePrices,
}: Props) {
  const [returnMoney, setReturnMoney] = useState<Change[]>([]);
  const [, setMenuPrice] = useRecoilState(MenuPriceState);
  const [, setSelectedMenu] = useRecoilState(selectedMenuState);

  const onClickReturnMoney = () => {
    if (menuPrice === 0) alert("반환할 금액이 없습니다!");
    if (menuPrice === 0) setSelectedMenu([]);

    const change = [];
    for (let i = 0; menuPrice !== 0; i++) {
      const count =
        menuPrice / reversePrices[i] >= 1
          ? Math.floor(menuPrice / reversePrices[i])
          : 0;

      if (count) {
        change.push({
          value: reversePrices[i],
          count,
        });
      }

      menuPrice =
        count > 0
          ? (menuPrice = menuPrice - reversePrices[i] * count)
          : menuPrice;
    }

    setReturnMoney(change);
    setMenuPrice(0);
  };

  return (
    <div>
      <MoneyReturnButton onClick={onClickReturnMoney}>
        남은 금액 반환하기
      </MoneyReturnButton>
      <div>
        {returnMoney.map((returnMoney, index) => (
          <div key={index}>
            <div>
              {returnMoney.value.toLocaleString()}원 x {returnMoney.count}개
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const MoneyReturnButton = styled.button`
  cursor: pointer;
  margin-bottom: 10px;
`;
