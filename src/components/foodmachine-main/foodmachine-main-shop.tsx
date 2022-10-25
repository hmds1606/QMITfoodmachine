import { PromisePropsShops } from "../../apis/shop";
import styled from "@emotion/styled";

interface Props {
  shops: PromisePropsShops[];
  onClickShop: (name: string) => void;
}

export default function FoodMachineMainShop({ shops, onClickShop }: Props) {
  return (
    <ShopWrapper>
      <ShopTitle>음식점선택</ShopTitle>

      {shops.map((shop) => (
        <div key={shop.id}>
          <ShopName onClick={() => onClickShop(shop.name)}>
            {shop.name}
          </ShopName>
        </div>
      ))}
    </ShopWrapper>
  );
}

const ShopWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ShopTitle = styled.h5`
  width: 100px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShopName = styled.div`
  font-size: 15px;
  width: 100px;
  height: 30px;
  border-bottom: 1px solid #ff9f9f;
  color: #db7171;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
