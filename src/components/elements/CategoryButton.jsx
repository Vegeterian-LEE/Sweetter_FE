import React from "react";
import styled from "styled-components";

const CategoryButton = ({ children, onClick, active }) => {
  return (
    <BtnWrapper>
      <Button onClick={onClick}>{children}</Button>
      <StateBar active={active} />
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 50px;
  font-size: 18px;
  background-color: transparent;
`;

const StateBar = styled.div`
  background-color: ${(props) => (props.active ? "#1c9bef" : "transparent")};
  width: 100px;
  height: 5px;
  border-radius: 2px;
`;

export default CategoryButton;
