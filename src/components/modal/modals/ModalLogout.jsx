import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { FlexAttribute } from "../../../style/Mixin";
import { StMiniFaTwitter, ModalBoxRef } from "../../../pages/LoginPage";

import ModalWrapper from "../ModalFrames/ModalWrapper";
import ModalBox from "../ModalFrames/ModalBox";
import Button from "../../elements/Button";

const ModalLogout = ({ signoutModalRef }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    Cookies.remove("accessJWTToken");
    navigate("/login");
  };

  return (
    <ModalWrapper>
      <ModalBox>
        <ModalBoxRef ref={signoutModalRef}>
          <StMiniFaTwitterWrapper>
            <StMiniFaTwitter />
          </StMiniFaTwitterWrapper>
          <StTitle>트위터에서 로그아웃할까요?</StTitle>
          <StMessage>
            언제든지 다시 로그인 할 수 있습니다. 계정을 전환하려는 경우 이미
            존재하는 계정을 추가하면 전환할 수 있습니다.
          </StMessage>
          <StButtonWrapper>
            <GrayButton>취소</GrayButton>
            <Button wh="s" width="10rem" onClick={handleLogout}>
              로그아웃
            </Button>
          </StButtonWrapper>
        </ModalBoxRef>
      </ModalBox>
    </ModalWrapper>
  );
};

const StMiniFaTwitterWrapper = styled.div`
  ${FlexAttribute("", "", "center")}
  margin-right: 20px;
`;

const StTitle = styled.div`
  margin-right: 32px;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

const StMessage = styled.p`
  text-align: center;
  margin-right: 32px;
`;

const StButtonWrapper = styled.div`
  ${FlexAttribute("", "", "space-around")}
  gap: 2rem;
  margin-right: 32px;
  margin-top: 2rem;
`;

const GrayButton = styled.button`
  width: 10rem;
  height: 45px;
  border: none;
  border-radius: 50px;
  color: black;
  font-size: 13px;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor || "lightgray"};
  cursor: pointer;
`;

export default ModalLogout;
