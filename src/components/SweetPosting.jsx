import React from "react";
import styled from "styled-components";

import Button from "./elements/Button";

import { FaUserCircle } from "react-icons/fa";
import { BsImage } from "react-icons/bs";

const SweetPosting = () => {
  return (
    <>
      <SweetPostingContainer>
        <InputWrapper>
          <UserImage>
            <FaUserCircle size={55} />
          </UserImage>
          <SweetInput placeholder="What's happening?"></SweetInput>
        </InputWrapper>
        <SubmitWrapper>
          <BsImage size={20} />
          <Button wh="s">Sweet</Button>
        </SubmitWrapper>
      </SweetPostingContainer>
    </>
  );
};

const SweetPostingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 135px;
  width: 44vw;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const UserImage = styled.div`
  margin-right: 15px;
`;

const SweetInput = styled.textarea`
  width: 70%;
  height: 100px;
  font-size: 17px;
  resize: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2); ;
`;

export default SweetPosting;
