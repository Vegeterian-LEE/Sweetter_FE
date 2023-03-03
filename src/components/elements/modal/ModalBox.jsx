import React, { useEffect } from "react";
import ModalWrapper from "./ModalWrapper";
import styled from "styled-components";

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
        <BtnWrapper>
          <button>닫기</button>
          <button>확인</button>
        </BtnWrapper>
      </Modal>
    </ModalWrapper>
  );
}

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 31.25rem;
  height: 19rem;
  padding: 1.25rem;
  border: 1px solid black;
  border-radius: 1.25rem;
  background-color: white;
`;

const ModalText = styled.p`
  margin-top: 0.9375rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default ModalBox;