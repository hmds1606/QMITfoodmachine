export interface PromisePropsShops {
  id: number;
  type: string;
  name: string;
}

export const shop = [
  {
    id: 0,
    type: "한식",
    name: "마녀김밥",
  },
  {
    id: 1,
    type: "중식",
    name: "짜야",
  },
  {
    id: 2,
    type: "일식",
    name: "초와밥",
  },
  {
    id: 3,
    type: "한식",
    name: "전주식당",
  },
  {
    id: 4,
    type: "중식",
    name: "희래등",
  },
  {
    id: 5,
    type: "중식",
    name: "홍콩반점",
  },
  {
    id: 6,
    type: "일식",
    name: "린스시",
  },
  {
    id: 7,
    type: "중식",
    name: "보배반점",
  },
];

export const getShops = () => {
  return new Promise<PromisePropsShops[]>((resolve) => {
    setTimeout(() => resolve(shop), 1000);
  });
};
