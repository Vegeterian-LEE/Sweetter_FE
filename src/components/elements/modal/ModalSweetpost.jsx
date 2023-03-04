import React from "react";

import styled from "styled-components";

import Button from "../Button";
import ModalBox from "./ModalBox";
import ModalWrapper from "./ModalWrapper";

import { FaUserCircle } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { FlexAttribute } from "../../../style/Mixin";

const ModalSweetpost = ({ sweetPostModalRef }) => {
  return (
    <>
      <ModalWrapper>
        <ModalBox>
          <div ref={sweetPostModalRef}>
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
          </div>
        </ModalBox>
      </ModalWrapper>
    </>
  );
};

export const InputWrapper = styled.div`
  ${FlexAttribute("column")}
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const UserImage = styled.div`
  margin-right: 15px;
`;

export const SweetInput = styled.textarea`
  margin-top: 10px;
  width: 70%;
  height: 100px;
  font-size: 20px;
  resize: none;
`;

export const SubmitWrapper = styled.div`
  ${FlexAttribute("row", "center", "space-around")}
  gap: 18rem;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2); ;
`;

export default ModalSweetpost;
