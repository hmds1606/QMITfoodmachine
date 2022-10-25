import styled from "@emotion/styled";

interface Props {
  shopName: string;
}

export default function FoodMachineMenuTitle({ shopName }: Props) {
  return (
    <ShopNameWrapper>
      <ShopName>{shopName}</ShopName>
      <h3>메뉴 고르기</h3>
    </ShopNameWrapper>
  );
}

const ShopNameWrapper = styled.div`
  display: flex;
`;

const ShopName = styled.h3`
  color: #db7171;
  border-bottom: 1px solid #ff9f9f;
  margin-right: 7px;
`;
