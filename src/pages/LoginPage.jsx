import React from "react";
import styled from "styled-components";

import TwitterLogo from "../assets/TwitterLogo.jpg";

import Button from "../components/elements/Button";
import ModalWrapper from "../components/elements/modal/ModalWrapper";
import ModalBox from "../components/elements/modal/ModalBox";

import useOutSideClick from "../components/hooks/useOutsideClick";

import { useState, useRef } from "react";
import { FaTwitter } from "react-icons/fa";
import ModalLogout from "../components/elements/modal/ModalLogout";

const LoginPage = () => {
  // 로그인 모달 관리
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const loginModalRef = useRef(null);
  useOutSideClick(loginModalRef, handleLoginModalClose);

  //회원가입 모달 관리
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSignupModalClose = () => {
    setIsSignupModalOpen(false);
  };

  const signupModalRef = useRef(null);
  useOutSideClick(signupModalRef, handleSignupModalClose);

  // 로그인 -> 회원가입 모달 이동
  const handleMovetoSignupModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  //로그아웃 모달(테스트)
  const [isSignoutModalOpen, setIsSignoutModalOpen] = useState(false);
  const handleSignoutModalClose = () => {
    setIsSignoutModalOpen(false);
  };
  const signoutModalRef = useRef(null);
  useOutSideClick(signoutModalRef, handleSignoutModalClose);

  return (
    <>
      <Container>
        <LeftHalf>
          <img src={TwitterLogo} alt="Twitter Logo" />
        </LeftHalf>
        <RightHalf>
          <StFaTwitter />
          <StTitle>지금 일어나고 있는 일</StTitle>
          <StSub>오늘 트위터에 가입하세요</StSub>
          <ButtonWrapper>
            <Button onClick={() => setIsSignupModalOpen(true)} wh="l">
              가입하기
            </Button>
            <Button onClick={() => setIsLoginModalOpen(true)} wh="l">
              로그인
            </Button>
            <Button onClick={() => setIsSignoutModalOpen(true)} wh="l">
              로그아웃
            </Button>
          </ButtonWrapper>
        </RightHalf>
      </Container>
      {isLoginModalOpen && (
        <ModalWrapper>
          <ModalBox>
            <div ref={loginModalRef}>
              <StMiniFaTwitter />
              <StLogin>트위터 로그인</StLogin>
              <StInput type="text" placeholder="이메일" />
              <StInput type="text" placeholder="비밀번호" />
              <Button wh="l" width="350px">
                로그인
              </Button>
              <StToSignUp onClick={handleMovetoSignupModal}>
                비밀번호를 잊으셨나요? 트위터 가입
              </StToSignUp>
            </div>
          </ModalBox>
        </ModalWrapper>
      )}

      {isSignupModalOpen && (
        <ModalWrapper>
          <ModalBox>
            <div ref={signupModalRef}>
              <StMiniFaTwitter />
              <StLogin>트위터 회원가입</StLogin>
              <StInput type="text" placeholder="닉네임" />
              <StInput type="text" placeholder="유저 네임" />
              <StInput type="text" placeholder="이메일" />
              <StInput type="text" placeholder="비밀번호" />
              <Button wh="l" width="350px">
                가입 완료
              </Button>
            </div>
          </ModalBox>
        </ModalWrapper>
      )}
      {isSignoutModalOpen && <ModalLogout signoutModalRef={signoutModalRef} />}
    </>
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

const StFaTwitter = styled(FaTwitter)`
  font-size: 60px;
  margin-bottom: 20px;
  color: #4da0eb;
  border-radius: 50%;
  padding: 10px;
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

export const StMiniFaTwitter = styled(FaTwitter)`
  font-size: 30px;
  margin-bottom: 25px;
  color: #4da0eb;
  border-radius: 50%;
`;

export const StLogin = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const StInput = styled.input`
  width: 350px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: #4da0eb;
  }

  &::placeholder {
    color: #ccc;
    transition: color 0.2s ease-in-out;
  }

  &:hover::placeholder {
    color: #4da0eb;
  }
`;

export const StToSignUp = styled.h3`
  color: #4da0eb;
  font-weight: bold;
  font-size: 13px;
  margin-top: 16px;
  text-align: center;
  margin-right: 64px;
  cursor: pointer;
`;

export default LoginPage;
