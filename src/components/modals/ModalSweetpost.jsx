import React from "react";

import styled from "styled-components";
import theme from "../../style/Theme";
import { ModalBoxRef } from "../../pages/Login/LoginPage";
import { FlexAttribute } from "../../style/Mixin";

import ModalBox from "../../elements/ModalBox";
import ModalWrapper from "../../elements/ModalWrapper";
import SweetPosting from "../SweetPosting";

const ModalSweetpost = ({ sweetPostModalRef }) => {
  return (
    <>
      <ModalWrapper>
        <ModalBox width={"42vw"}>
          <ModalBoxRef ref={sweetPostModalRef}>
            <SweetPosting></SweetPosting>
          </ModalBoxRef>
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
  border-bottom: ${theme.borderline};
`;

export default ModalSweetpost;
