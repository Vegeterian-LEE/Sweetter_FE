import React from "react";

import ModalWrapper from "../ModalFrames/ModalWrapper";
import ModalBox from "../ModalFrames/ModalBox";
import {
  StMiniFaTwitter,
  StLogin,
  StInput,
  StMessage,
  ModalBoxRef,
} from "../../../pages/LoginPage";

import Button from "../../elements/Button";

const ModalSignup = ({
  signupModalRef,
  username,
  onChangeUsername,
  email,
  onChangeEmail,
  userId,
  onChangeUserId,
  userIdMessage,
  password,
  onChangePassword,
  passwordMessage,
  joinHandler,
}) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <ModalBoxRef ref={signupModalRef}>
          <StMiniFaTwitter />
          <StLogin>트위터 회원가입</StLogin>
          <StInput
            type="text"
            placeholder="유저 이름"
            value={username}
            onChange={onChangeUsername}
          />
          <StInput
            type="text"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmail}
          />
          <StInput
            marginBottom="5px"
            type="text"
            placeholder="ID"
            value={userId}
            onChange={onChangeUserId}
          />
          <StMessage>{userIdMessage}</StMessage>
          <StInput
            marginBottom="5px"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <StMessage>{passwordMessage}</StMessage>
          <Button wh="l" width="350px" onClick={joinHandler}>
            가입 완료
          </Button>
        </ModalBoxRef>
      </ModalBox>
    </ModalWrapper>
  );
};

export default ModalSignup;
