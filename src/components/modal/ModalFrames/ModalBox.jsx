import React, { useEffect } from "react";

import styled from "styled-components";
import { FlexAttribute } from "../../../style/Mixin";

import ModalWrapper from "./ModalWrapper";
import theme from "../../../style/Theme";

function ModalBox({ children }) {
  useEffect(() => {
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden"; // body를 hidden 으로 변경
    // modal 컴포넌트가 사라졌을 때 body를 다시 스크롤 가능하게 만들어주도록 클린업 사용
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  return (
    <ModalWrapper>
      <Modal>
        <ModalText>{children}</ModalText>
        <BtnWrapper></BtnWrapper>
      </Modal>
    </ModalWrapper>
  );
}

const Modal = styled.div`
  ${FlexAttribute("column", "center")}
  text-align: left;
  margin: 0 auto;
  ${(props) => (props.width ? props.width : "23rem")};
  padding: 1.25rem;
  border-radius: 1.25rem;
  background-color: ${theme.color.modal_background};
`;

const ModalText = styled.div`
  min-width: 42vw;
`;

const BtnWrapper = styled.div`
  ${FlexAttribute("", "", "flex-end")}
`;

export default ModalBox;
