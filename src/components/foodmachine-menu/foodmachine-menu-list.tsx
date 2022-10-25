import React from "react";
import { Menu, PromisePropsMenu } from "../../apis/menu";
import styled from "@emotion/styled";

interface Props {
  menuList: PromisePropsMenu["menuList"];
  menuPrice: number;
  onClickMenu: (menu: Menu) => void;
}

const FoodMachineMenuList = ({ menuList, menuPrice, onClickMenu }: Props) => {
  return (
    <MenuListWrapper>
      {menuList.map((menu) => (
        <MenuList key={menu.id}>
          {menuPrice < menu.price ? (
            <DisabledMenu>
              <MenuName>{menu.menuName}</MenuName>
              <MenuPrice>{menu.price.toLocaleString()}원</MenuPrice>
            </DisabledMenu>
          ) : (
            <AbledMenu onClick={() => onClickMenu(menu)}>
              <MenuName>{menu.menuName}</MenuName>
              <MenuPrice>{menu.price.toLocaleString()}원</MenuPrice>
            </AbledMenu>
          )}
        </MenuList>
      ))}
    </MenuListWrapper>
  );
};

export default React.memo(FoodMachineMenuList);

export const MemoizedMenuList = React.memo(FoodMachineMenuList);

const MenuListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const MenuList = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

const DisabledMenu = styled.div`
  color: #bdbdbd;
  pointer-events: none;
  display: flex;
  flex-direction: row;
`;

const AbledMenu = styled.div`
  color: #000000;
  display: flex;
  flex-direction: row;
`;

const MenuName = styled.div`
  width: 60px;
`;

const MenuPrice = styled.div`
  width: 80px;
`;
