import { Menu } from "../../common/atom";
import { MouseEvent } from "react";
import { SetterOrUpdater } from "recoil";
import styled from "@emotion/styled";

interface Props {
  selectedMenu: Menu[];
  setSelectedMenu: SetterOrUpdater<Menu[]>;
  setMenuPrice: SetterOrUpdater<number>;
}

export default function FoodMachineMenuFixed({
  selectedMenu,
  setSelectedMenu,
  setMenuPrice,
}: Props) {
  const removeMenu = (e: MouseEvent<HTMLDivElement>) => {
    const removedMenu = selectedMenu.filter(
      (menu) => menu.id !== Number(e.currentTarget.id)
    );
    console.log(removedMenu);

    const restPrice = selectedMenu.filter(
      (menu) => menu.id === Number(e.currentTarget.id)
    );

    setSelectedMenu(removedMenu);
    setMenuPrice((prev) => prev + restPrice[0].price);
  };

  return (
    <FixedMenuWrapper>
      {selectedMenu.map((menu) => (
        <FixedMenu key={menu.id}>
          <div>{menu.menuName}</div>
          <RemoveButton id={String(menu.id)} onClick={removeMenu}>
            X
          </RemoveButton>
        </FixedMenu>
      ))}
    </FixedMenuWrapper>
  );
}

const FixedMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-direction: row;
  gap: 20px;
`;

const FixedMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #ff9f9f;
  border-radius: 5px;
  padding: 3px;
`;

const RemoveButton = styled.div`
  width: 15px;
  height: 15px;
  font-size: 10px;
  cursor: pointer;
  background-color: white;
  border-radius: 100%;
  color: #ff9f9f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
