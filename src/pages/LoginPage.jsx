import { React, useState, useRef } from "react";
import useOutSideClick from "../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import { FlexAttribute } from "../style/Mixin";

import TwitterLogo from "../assets/TwitterLogo.jpg";

import Button from "../components/elements/Button";
import ModalWrapper from "../components/modal/ModalWrapper";
import ModalBox from "../components/modal/ModalBox";

import { FaTwitter } from "react-icons/fa";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 오류 메세지
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 유효성 검사 둘다 true 일시 버튼 클릭 가능
  const [isUsername, setIsUsername] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const navigate = useNavigate();

  //userId input change

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  // username input change
  const onChangeUsername = (e) => {
    setUsername(e.target.value);

    const idRegex = /^(?=.*?[0-9])(?=.*?[a-z]).{4,10}$/;

    if (!idRegex.test(e.target.value)) {
      setUsernameMessage(
        "영어 소문자, 숫자 각각 1개 이상, 총 4자리-10자리여야 합니다."
      );
      setIsUsername(false);
    } else {
      setUsernameMessage("올바른 id 형식입니다");
      setIsUsername(true);
    }
  };

  // email input change

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // pw input change
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    const idRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,15}$/;

    if (!idRegex.test(e.target.value)) {
      setPasswordMessage(
        "패스워드는 8자리-15자리로, 영어 소문자, 숫자, 특수문자가 각각 1개 이상이여야 합니다."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 패스워드 형식입니다.");
      setIsPassword(true);
    }
  };

  // 회원가입
  const joinHandler = async () => {
    if (isUsername === true && isPassword === true) {
      try {
        const newUser = {
          userId,
          username,
          email,
          password,
        };
        await axios.post("", newUser);
        alert("회원가입 성공 !!");
        navigate("/");
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert("규정에 맞는 아이디와 비밀번호를 입력해 주세요!");
    }
  };

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
              <StInput
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={onChangeUserId}
              />
              <StInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={onChangeEmail}
              />
              <StInput
                type="text"
                placeholder="User Name"
                value={username}
                onChange={onChangeUsername}
              />
              <StMessage>{usernameMessage}</StMessage>
              <StInput
                type="text"
                placeholder="비밀번호"
                value={password}
                onChange={onChangePassword}
              />
              <StMessage>{passwordMessage}</StMessage>
              <Button wh="l" width="350px" onClick={joinHandler}>
                가입 완료
              </Button>
            </div>
          </ModalBox>
        </ModalWrapper>
      )}
    </>
  );
};

const Container = styled.div`
  ${FlexAttribute()}
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
  ${FlexAttribute("column", "flex-start", "center")}
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
  ${FlexAttribute("column")}
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

const StMessageBox = styled.div`
  position: relative;
  margin-top: 1rem;
`;

const StMessage = styled.p`
  font-size: 7px;
  color: #0c85d0;
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
