import React from "react";
import styled from "styled-components";
import TwitterLogo from "../assets/TwitterLogo.jpg";
import Button from "../components/elements/Button";

const LoginPage = () => {
  return (
    <Container>
      <LeftHalf>
        <img src={TwitterLogo} alt="Twitter Logo" />
      </LeftHalf>
      <RightHalf>
        <StTitle>지금 일어나고 있는 일</StTitle>
        <StSub>오늘 트위터에 가입하세요</StSub>
        <ButtonWrapper>
          <Button wh="l">가입하기</Button>
          <Button wh="l">로그인</Button>
        </ButtonWrapper>
      </RightHalf>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  overflow-y: hidden;
`;

const LeftHalf = styled.div`
  display: inline-block;
  width: 50%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RightHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  width: 50%;
  height: 100vh;
  background-color: white;
`;

const StTitle = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StSub = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

export default LoginPage;
