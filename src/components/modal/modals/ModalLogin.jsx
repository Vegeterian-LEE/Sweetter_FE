import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import ModalWrapper from "../ModalFrames/ModalWrapper";
import ModalBox from "../ModalFrames/ModalBox";
import {
  StMiniFaTwitter,
  StLogin,
  StInput,
  StToSignUp,
} from "../../../pages/LoginPage";
import Button from "../../elements/Button";

import { __loginUser } from "../../../redux/modules/usersSlice";

const ModalLogin = ({
  loginModalRef,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  handleMovetoSignupModal,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    if (email !== "" && password !== "") {
      const loginUser = {
        email,
        password,
      };
      dispatch(__loginUser(loginUser))
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert("로그인 오류!", error);
        });
    } else {
      alert("이메일과 비밀번호를 입력해 주세요!");
    }
  };

  return (
    <ModalWrapper>
      <ModalBox>
        <div ref={loginModalRef}>
          <StMiniFaTwitter />
          <StLogin>트위터 로그인</StLogin>
          <StInput
            type="text"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmail}
          />
          <StInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          <Button wh="l" width="350px" onClick={loginHandler}>
            로그인
          </Button>
          <StToSignUp onClick={handleMovetoSignupModal}>
            비밀번호를 잊으셨나요? 트위터 가입
          </StToSignUp>
        </div>
      </ModalBox>
    </ModalWrapper>
  );
};

export default ModalLogin;
