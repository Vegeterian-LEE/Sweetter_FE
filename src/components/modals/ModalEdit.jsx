import styled from "styled-components";

import ModalWrapper from "../../elements/ModalWrapper";
import ModalBox from "../../elements/ModalBox";
import { ModalBoxRef } from "../../pages/Login/LoginPage";
import { FaUserCircle } from "react-icons/fa";
import { BsImage } from "react-icons/bs";

const ModalEdit = ({ editModalRef }) => {
  return (
    <ModalWrapper>
      <ModalBox width="42vw">
        <ModalBoxRef ref={editModalRef}>
          <UpperBox>
            <StText>프로필 수정</StText>
            <SaveButton>save</SaveButton>
          </UpperBox>
          <UserBackground>
            <StBsImage size={25} />
          </UserBackground>

          <InputWrapper>
            <StInput type="text" placeholder="username" />
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
  height: 10rem;
  width: 100%;
  background-color: lightgray;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const StBsImage = styled(BsImage)`
  :hover {
    cursor: pointer;
  }
`;

const StFaUserCircle = styled(FaUserCircle)`
  margin-top: -2rem;
  :hover {
    cursor: pointer;
  }
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
`;

export default ModalEdit;
