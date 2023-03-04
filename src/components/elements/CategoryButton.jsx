import React from "react";

import styled from "styled-components";
import { FlexAttribute } from "../../style/Mixin";

const CategoryButton = ({ children, onClick, active }) => {
  return (
    <BtnWrapper>
      <Button onClick={onClick}>{children}</Button>
      <StateBar active={active} />
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  ${FlexAttribute("column", "center", "center")}
`;

const Button = styled.button`
  height: 50px;
  font-size: 18px;
  background-color: transparent;
`;

const StateBar = styled.div`
  width: 100px;
  height: 5px;
  border-radius: 2px;
  background-color: ${(props) => (props.active ? "#1c9bef" : "transparent")};
`;

export default CategoryButton;
