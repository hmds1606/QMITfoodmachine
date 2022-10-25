import Spinner from "../images/loading.gif";
import styled from "@emotion/styled";

export default function Loading() {
  return (
    <LoadingWrapper>
      <LoadingIcon src={Spinner} alt="로딩 중" />
      <LoadingMessage>로딩 중</LoadingMessage>
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingIcon = styled.img`
  width: 30%;
  margin: 10px;
`;

const LoadingMessage = styled.h3`
  margin: 0;
`;
