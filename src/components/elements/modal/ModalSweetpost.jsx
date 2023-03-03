import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import Button from "../Button";
import ModalBox from "./ModalBox";
import ModalWrapper from "./ModalWrapper";
import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 18rem;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2); ;
`;

export default ModalSweetpost;
