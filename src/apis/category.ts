export const category = [
  {
    id: 0,
    type: "한식",
  },
  {
    id: 1,
    type: "중식",
  },
  {
    id: 2,
    type: "일식",
  },
];

export interface PromiseProps {
  id: number;
  type: string;
}

export const getCategories = () => {
  return new Promise<PromiseProps[]>((resolve) => {
    setTimeout(() => resolve(category), 1000);
  });
};
