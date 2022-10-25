import styled from "@emotion/styled";
import { PromiseProps } from "../../apis/category";

interface Props {
  categories: PromiseProps[];
  onClick: (type: string) => void;
}

export default function FoodMachineMainCategory({
  categories,
  onClick,
}: Props) {
  return (
    <CategoryWrapper>
      <CategoryTitle>종류선택</CategoryTitle>
      {categories.map((category) => (
        <div key={category.id}>
          <CategoryButton onClick={() => onClick(category.type)}>
            {category.type}
          </CategoryButton>
        </div>
      ))}
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryTitle = styled.h5`
  width: 100px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #ff9f9f;
  cursor: pointer;
`;
