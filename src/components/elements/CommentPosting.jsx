import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import theme from "../../style/Theme";
import { FlexAttribute, IconStyle, UserImageStyle } from "../../style/Mixin";

import Button from "./Button";

import TwitterLogo from "../../assets/TwitterLogo.jpg";

import { __uploadImage, __uploadSweet } from "../../redux/modules/sweetSlice";

const CommentPosting = () => {
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <SweetPostingContainer>
        <InputWrapper>
          <UserImage>
            <img src={TwitterLogo} alt="userImage" />
          </UserImage>
          <Preview>
            <SweetInput
              value={contents}
              onChange={(event) => setContents(event.target.value)}
              placeholder="What's happening?"
            ></SweetInput>
          </Preview>
        </InputWrapper>
        <SubmitWrapper>
          <Button wh="s">Sweet</Button>
        </SubmitWrapper>
      </SweetPostingContainer>
    </>
  );
};

const SweetPostingContainer = styled.div`
  ${FlexAttribute("column", "", "center")}
  margin-top: 20px;
  width: 44vw;
`;

const InputWrapper = styled.div`
  ${FlexAttribute("row", "", "center")}
  margin-top: 10px;
`;

const UserImage = styled.div`
  margin-right: 15px;
  img {
    ${UserImageStyle}
  }
`;

const Preview = styled.div`
  ${FlexAttribute("column", "", "center")}
  width: 75%;
`;

const SweetInput = styled.textarea`
  height: 100px;
  font-size: 17px;
  resize: none;
  border-bottom: ${theme.borderline};
`;

const SubmitWrapper = styled.div`
  ${FlexAttribute("row", "center", "space-around")}
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: ${theme.borderline};
  input {
    display: none;
  }
`;

const ImageLabel = styled.label`
  padding: 8px 8px 4px 8px;
  ${IconStyle}
`;

const PreviewImageWrapper = styled.div`
  ${FlexAttribute("row", "", "center")}
  flex-wrap: wrap;
`;

const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 30px;
  object-fit: cover;
`;

export default CommentPosting;
