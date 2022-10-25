import FoodMachineMainCategory from "../components/foodmachine-main/foodmachine-main-category";
import FoodMachineMainTitle from "../components/foodmachine-main/foodmachine-main-title";
import FoodMachineMainShop from "../components/foodmachine-main/foodmachine-main-shop";
import styled from "@emotion/styled";
import { getCategories, PromiseProps } from "../apis/category";
import { useEffect, useState } from "react";
import { getShops, PromisePropsShops } from "../apis/shop";
import { useRecoilState } from "recoil";
import { shopState } from "../common/atom";
import { useNavigate } from "react-router-dom";
import Loading from "../common/loading";

export default function FoodMachineMain() {
  const [categories, setCategories] = useState<PromiseProps[]>([]);
  const [shopType, setShopType] = useRecoilState<any>(shopState);
  const [shops, setShops] = useState<PromisePropsShops[]>([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [shopLoading, setShopLoading] = useState(true);

  const navigation = useNavigate();

  const PromiseCategory = async () => {
    setCategoryLoading(true);
    const result = await getCategories();
    setCategories(result);
    setCategoryLoading(false);
    setShopLoading(false);
  };

  const PromiseShops = async () => {
    setShopLoading(true);
    const result = await getShops();
    setShops(result);
    setShopLoading(false);
  };

  const onClick = (type: string) => {
    if (shops.length === 0) {
      PromiseShops();
    }
    setShopType(type);
  };

  useEffect(() => {
    PromiseCategory();
  }, []);

  const checkShoptype = () => {
    const tmp: PromisePropsShops[] = [];
    shops.forEach((shop) => {
      if (shop.type === shopType) {
        tmp.push(shop);
      }
    });
    return tmp;
  };

  const onClickShop = (name: string) => {
    navigation("/menu", { state: { name } });
  };

  return (
    <FoodMachineMainWrapper>
      <FoodMachineMainTitle />
      {categoryLoading ? (
        <Loading />
      ) : (
        <FoodMachineMainFlex>
          <FoodMachineMainCategory categories={categories} onClick={onClick} />

          {shopLoading ? (
            <Loading />
          ) : (
            <FoodMachineMainShop
              shops={checkShoptype()}
              onClickShop={onClickShop}
            />
          )}
        </FoodMachineMainFlex>
      )}
    </FoodMachineMainWrapper>
  );
}

const FoodMachineMainWrapper = styled.div`
  width: 200px;
  padding: 20px;
`;

const FoodMachineMainFlex = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
