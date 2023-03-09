import { React, useState, useRef, useEffect } from "react";
import useOutSideClick from "../../hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import styled from "styled-components";
import { FlexAttribute } from "../../style/Mixin";

import TwitterLogo from "../../assets/TwitterLogo.jpg";

import Button from "../../elements/Button";
import ModalLogin from "../../components/modals/ModalLogin";
import ModalSignup from "../../components/modals/ModalSignup";

import { __addUser } from "../../redux/modules/usersSlice";

import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 확인
  const navigate = useNavigate();

  useEffect(() => {
    // 쿠키 상태를 확인하고, 로그아웃된 경우 새로고침
    const accessJWTToken = Cookies.get("accessJWTToken");
    if (accessJWTToken) {
      navigate("/");
      window.location.reload();
    }
  }, [navigate]);

  // 오류 메세지
  const [userIdMessage, setUserIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 유효성 검사 둘다 true 일시 버튼 클릭 가능
  const [isUserId, setIsUserId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const dispatch = useDispatch();

  //userId input change

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  // email input change

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // userId input change
  const onChangeUserId = (e) => {
    setUserId(e.target.value);

    const idRegex = /^(?=.*?[0-9])(?=.*?[a-z]).{4,10}$/;

    if (!idRegex.test(e.target.value)) {
      setUserIdMessage(
        "영어 소문자, 숫자 각각 1개 이상, 총 4자리-10자리여야 합니다."
      );
      setIsUserId(false);
    } else {
      setUserIdMessage("올바른 id 형식입니다");
      setIsUserId(true);
    }
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

  const joinHandler = () => {
    if (isUserId === true && isPassword === true) {
      const newUser = {
        username,
        email,
        userId,
        password,
      };

      dispatch(__addUser(newUser))
        .then(() => {
          setIsSignupModalOpen(false);
          setIsLoginModalOpen(true);
        })
        .catch((error) => {
          alert("회원 가입 실패", error);
        });
      setUsername("");
      setEmail("");
      setUserId("");
      setPassword("");
    }
  };

  // 모달 닫히면 내용도 리셋

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setUserId("");
    setPassword("");
  };

  // 로그인 모달 관리
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
    resetForm();
  };

  const loginModalRef = useRef(null);
  useOutSideClick(loginModalRef, handleLoginModalClose);

  //회원가입 모달 관리
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSignupModalClose = () => {
    setIsSignupModalOpen(false);
    resetForm();
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
        <ModalLogin
          loginModalRef={loginModalRef}
          email={email}
          onChangeEmail={onChangeEmail}
          password={password}
          onChangePassword={onChangePassword}
          handleMovetoSignupModal={handleMovetoSignupModal}
        />
      )}

      {isSignupModalOpen && (
        <ModalSignup
          signupModalRef={signupModalRef}
          username={username}
          onChangeUsername={onChangeUsername}
          email={email}
          onChangeEmail={onChangeEmail}
          userId={userId}
          onChangeUserId={onChangeUserId}
          userIdMessage={userIdMessage}
          password={password}
          onChangePassword={onChangePassword}
          passwordMessage={passwordMessage}
          joinHandler={joinHandler}
        />
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
  margin-bottom: ${(props) => props.marginBottom || "20px"};
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

export const StMessage = styled.p`
  font-size: 7px;
  color: #0c85d0;
  margin-bottom: 15px;
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

export const ModalBoxRef = styled.div`
  ${FlexAttribute("column", "center", "center")}
`;

export default LoginPage;
