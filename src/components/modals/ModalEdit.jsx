import styled from "styled-components";
import useInput from "../../hooks/useInput";

import ModalWrapper from "../../elements/ModalWrapper";
import ModalBox from "../../elements/ModalBox";
import { ModalBoxRef } from "../../pages/Login/LoginPage";

import { FaUserCircle } from "react-icons/fa";
import { BsImage } from "react-icons/bs";

import TwitterLogo from "../../assets/TwitterLogo.jpg";
import { useSelector } from "react-redux";

const ModalEdit = ({ editModalRef }) => {
  const userInfo = useSelector((state) => state.users.userInfo);
  console.log(userInfo);
  const [{ username, introduction }, inputHandler] = useInput({
    username: userInfo.username,
    introduction: "",
  });
  return (
    <ModalWrapper>
      <ModalBox width="40vw">
        <ModalBoxRef ref={editModalRef}>
          <UpperBox>
            <StText>프로필 수정</StText>
            <SaveButton>save</SaveButton>
          </UpperBox>
          <UserBackground>
            <StBsImage size={25} />
          </UserBackground>
          <UserProfileImage>
            <ImageBox>
              <UserImage src={TwitterLogo} />
              <StFaUserCircle size={25} />
            </ImageBox>
          </UserProfileImage>
          <InputWrapper>
            <StInput
              name="username"
              value={username}
              onChange={(e) => inputHandler(e)}
              type="text"
              placeholder={"username"}
            />
            <StInput
              name="introduction"
              value={introduction}
              onChange={(e) => inputHandler(e)}
              type="text"
              placeholder="introduce"
            />
          </InputWrapper>
        </ModalBoxRef>
      </ModalBox>
    </ModalWrapper>
  );
};

const UpperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 13rem;
  margin-bottom: 1rem;
`;

const StText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const SaveButton = styled.button`
  width: 5rem;
  height: 40px;
  border: none;
  border-radius: 50px;
  color: black;
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor || "lightgray"};
  cursor: pointer;
`;

const UserBackground = styled.div`
  display: flex;
  height: 250px;
  width: 100%;
  background-color: lightgray;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const UserProfileImage = styled.div`
  position: relative;
`;

const ImageBox = styled.div``;

const StBsImage = styled(BsImage)`
  :hover {
    cursor: pointer;
  }
`;

const StFaUserCircle = styled(FaUserCircle)`
  top: 0;
  transform: translate(-50%, 80%);
  position: absolute;
  margin-top: -2rem;
  :hover {
    cursor: pointer;
  }
`;

const UserImage = styled.img`
  top: 0;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const StInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  :first-child {
    margin-top: 50px;
  }
  :not(:first-child) {
    margin-top: 20px;
  }
`;

export default ModalEdit;
