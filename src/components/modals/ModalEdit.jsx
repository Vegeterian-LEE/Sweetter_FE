import { useState } from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";

import ModalWrapper from "../../elements/ModalWrapper";
import ModalBox from "../../elements/ModalBox";
import { ModalBoxRef } from "../../pages/Login/LoginPage";

import { FaUserCircle } from "react-icons/fa";
import { BsImage } from "react-icons/bs";

import TwitterLogo from "../../assets/TwitterLogo.jpg";
import { useSelector } from "react-redux";
import { IconStyle } from "../../style/Mixin";
import { __editUserInfo } from "../../redux/modules/usersSlice";
import { __uploadImage } from "../../redux/modules/sweetSlice";

const ModalEdit = ({ editModalRef }) => {
  const userInfo = useSelector((state) => state.users.userInfo);
  const dispatch = useDispatch();
  const [background, setBackground] = useState([]);
  const [profile, setProfile] = useState([]);
  const [imageUrl, setImage] = useState();

  const [{ username, introduction, newPassword }, inputHandler] = useInput({
    username: userInfo.username,
    introduction: "",
    newPassword: "",
  });

  const profileImageHandler = (e) => {
    setProfile(e.target.files[0]);
  };

  const backgroundImageHandler = (e) => {
    setBackground(e.target.files[0]);
  };

  // const setImageData = async (image) => {
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   dispatch(__uploadImage(formData));
  // };

  const editHandler = async (e) => {
    e.preventDefault();

    const data = {
      profileImage: profile,
      backgroundImage: background,
      introduction: introduction,
      newPassword: newPassword,
      username: username,
    };
    console.log(data);
  };

  return (
    <ModalWrapper>
      <ModalBox width="40vw">
        <ModalBoxRef ref={editModalRef}>
          <UpperBox>
            <StText>프로필 수정</StText>
            <SaveButton type="submit" form="editUserInfo">
              save
            </SaveButton>
          </UpperBox>
          <UserBackground>
            <ImageLabel htmlFor="backgroundInput">
              <StBsImage size={25} />
            </ImageLabel>
            <input
              id="backgroundInput"
              name="backgroundImage"
              type="file"
              onChange={(e) => profileImageHandler(e)}
            />
          </UserBackground>
          <UserProfileImage>
            <ImageBox>
              <UserImage src={TwitterLogo} />
              <ImageLabel htmlFor="userImageInput">
                <StFaUserCircle size={25} />
              </ImageLabel>
              <input
                id="userImageInput"
                name="userProfile"
                type="file"
                onChange={(e) => backgroundImageHandler(e)}
              />
            </ImageBox>
          </UserProfileImage>
          <InputWrapper onSubmit={(e) => editHandler(e)} id="editUserInfo">
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
            <StInput
              name="newPassword"
              value={newPassword}
              onChange={(e) => inputHandler(e)}
              type="password"
              placeholder="newPassword"
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
  input {
    display: none;
  }
`;

const UserProfileImage = styled.div`
  position: relative;
`;

const ImageBox = styled.div`
  input {
    display: none;
  }
`;

const StBsImage = styled(BsImage)`
  :hover {
    cursor: pointer;
  }
`;

const StFaUserCircle = styled(FaUserCircle)`
  top: 0;
  transform: translate(0, 75%);
  position: absolute;
  margin-top: -2rem;
  :hover {
    cursor: pointer;
  }
`;

const UserImage = styled.img`
  top: 0;
  transform: translate(-40%, -50%);
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
`;

const ImageLabel = styled.label`
  padding: 8px 8px 4px 8px;
  ${IconStyle}
`;

const InputWrapper = styled.form`
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
