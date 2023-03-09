import React from "react";

import styled from "styled-components";
import { FlexAttribute } from "../style/Mixin";
import theme from "../style/Theme";

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
  font-size: 17px;
  background-color: transparent;
  cursor: pointer;
`;

const StateBar = styled.div`
  width: 100px;
  height: 5px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.active ? theme.color.main : "transparent"};
`;

export default CategoryButton;
