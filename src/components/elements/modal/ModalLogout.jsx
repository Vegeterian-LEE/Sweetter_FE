import React from "react";
import styled from "styled-components";
import { StMiniFaTwitter } from "../../../pages/LoginPage";
import ModalWrapper from "./ModalWrapper";
import ModalBox from "./ModalBox";
import Button from "../Button";

const ModalLogout = ({ signoutModalRef }) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <div ref={signoutModalRef}>
          <StMiniFaTwitterWrapper>
            <StMiniFaTwitter />
          </StMiniFaTwitterWrapper>
          <StTitle>트위터에서 로그아웃할까요?</StTitle>
          <StMessage>
            언제든지 다시 로그인 할 수 있습니다. 계정을 전환하려는 경우 이미
            존재하는 계정을 추가하면 전환할 수 있습니다.
          </StMessage>
        </div>
        <StButtonWrapper>
          <GrayButton>취소</GrayButton>
          <Button wh="s" width="10rem">
            로그아웃
          </Button>
        </StButtonWrapper>
      </ModalBox>
    </ModalWrapper>
  );
};

const StMiniFaTwitterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20px;
`;

const StTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-right: 32px;
`;

const StMessage = styled.p`
  text-align: center;
  margin-right: 32px;
`;

const StButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-right: 32px;
  margin-top: 2rem;
`;

const GrayButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "lightgray"};
  color: black;
  border: none;
  border-radius: 50px;
  font-size: 13px;
  font-weight: bold;
  width: 10rem;
  height: 45px;
  cursor: pointer;
`;

export default ModalLogout;
