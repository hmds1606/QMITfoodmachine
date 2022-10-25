import { atom } from "recoil";

export interface Menu {
  id: number;
  menuName: string;
  price: number;
}

export interface MenuList {
  id: number;
  menuName: string;
  price: number;
}

export const shopState = atom<MenuList[]>({
  key: "shop",
  default: [],
});

export const MenuPriceState = atom({
  key: "menuPrice",
  default: 0,
});

export const selectedMenuState = atom<Menu[]>({
  key: "selectedMenu",
  default: [],
});
