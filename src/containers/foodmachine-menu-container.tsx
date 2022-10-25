import FoodMachineMenuTitle from "../components/foodmachine-menu/foodmachine-menu-title";
import styled from "@emotion/styled";
import FoodMachineMenuList from "../components/foodmachine-menu/foodmachine-menu-list";
import FoodMachineMenuMoney from "../components/foodmachine-menu/foodmachine-menu-money";
import FoodMachineMenuFixed from "../components/foodmachine-menu/foodmachine-menu-fixed";
import FoodMachineMenuMoneyReturn from "../components/foodmachine-menu/foodmachine-menu-moneyreturn";
import FoodMachineTotalMoney from "../components/foodmachine-menu/foodmachine-menu-moneytotal";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getMenus, Menu, PromisePropsMenu } from "../apis/menu";
import { useRecoilState } from "recoil";
import { MenuList, MenuPriceState, selectedMenuState } from "../common/atom";
import Loading from "../common/loading";

const PRICES = [100, 500, 1000, 5000, 10000, 50000];
const REVERSEPRICES = [50000, 10000, 5000, 1000, 500, 100];

export default function FoodMachineMenu() {
  const location = useLocation();
  const shopName = location.state.name;

  const [menuListValue, setMenuListValue] = useState<MenuList[]>([]);
  const [menuPrice, setMenuPrice] = useRecoilState(MenuPriceState);
  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PromiseMenus();
  }, []);

  const PromiseMenus = async () => {
    setLoading(true);
    const result = await getMenus();
    checkShopName(result);
    setLoading(false);
  };

  const checkShopName = (menus: PromisePropsMenu[]) => {
    setMenuListValue(
      menus[menus.findIndex((menu) => menu.name === shopName)].menuList
    );
  };

  const onClickMoney = useCallback(
    (price: number) => {
      setMenuPrice((money) => money + price);
    },
    [PRICES]
  );

  const selectMenu = useCallback(
    (menu: Menu) => {
      setSelectedMenu((prev) => [...prev, { ...menu, id: prev.length + 1 }]);
      setMenuPrice((prev) => prev - menu.price);
    },
    [menuPrice]
  );

  const onClickReset = useCallback(() => {
    setMenuPrice(0);
  }, [menuPrice]);

  return (
    <FoodMachineMenuWrapper>
      <FoodMachineMenuTitle shopName={shopName} />
      {loading ? (
        <Loading />
      ) : (
        <FoodMachineWrapper>
          <FoodMachineMenuFlex>
            <FoodMachineMenuList
              menuPrice={menuPrice}
              menuList={menuListValue}
              onClickMenu={selectMenu}
            />
            <div>
              <FoodMachineMenuMoney
                onClickMoney={onClickMoney}
                prices={PRICES}
              />
              <FoodMachineTotalMoney
                menuPrice={menuPrice}
                onClickReset={onClickReset}
              />
            </div>
          </FoodMachineMenuFlex>

          <FoodMachineMenuFixed
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            setMenuPrice={setMenuPrice}
          />

          <FoodMachineMenuMoneyReturn
            menuPrice={menuPrice}
            reversePrices={REVERSEPRICES}
          />
        </FoodMachineWrapper>
      )}
    </FoodMachineMenuWrapper>
  );
}

const FoodMachineMenuWrapper = styled.div`
  width: 400px;
  padding: 20px;
`;

const FoodMachineWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FoodMachineMenuFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;
