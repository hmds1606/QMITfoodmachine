export interface PromisePropsMenu {
  id: number;
  name: string;
  menuList: Menu[];
}

export interface Menu {
  id: number;
  menuName: string;
  price: number;
}

export const menu = [
  {
    id: 0,
    name: "마녀김밥",
    menuList: [
      { id: 0, menuName: "김밥", price: 2000 },
      { id: 1, menuName: "라면", price: 5000 },
      { id: 2, menuName: "치즈라면", price: 13000 },
      { id: 3, menuName: "비빔밥", price: 5000 },
    ],
  },
  {
    id: 1,
    name: "짜야",
    menuList: [
      { id: 0, menuName: "짜장면", price: 2000 },
      { id: 1, menuName: "짬뽕", price: 11000 },
      { id: 2, menuName: "탕수육", price: 50000 },
      { id: 3, menuName: "단무지", price: 300 },
    ],
  },
  {
    id: 2,
    name: "초와밥",
    menuList: [
      { id: 0, menuName: "라멘", price: 2000 },
      { id: 1, menuName: "우동", price: 7000 },
      { id: 2, menuName: "돈까스", price: 5000 },
      { id: 3, menuName: "초밥", price: 35000 },
    ],
  },
];

export const getMenus = () => {
  return new Promise<PromisePropsMenu[]>((resolve) => {
    setTimeout(() => resolve(menu), 1000);
  });
};
