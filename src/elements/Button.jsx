import React from "react";

import styled, { css } from "styled-components";
import theme from "../style/Theme";

const Button = ({ children, disableHover, ...props }) => {
  const buttonStyle = { width: props.width };
  return (
    <TwitterButton
      wh={props.wh}
      style={buttonStyle}
      onClick={props.onClick}
      disableHover={disableHover}
    >
      {children}
    </TwitterButton>
  );
};

Button.defaultProps = {
  wh: "m",
  onClick: () => {},
};

const TwitterButton = styled.button`
  background-color: ${(props) => props.backgroundColor || theme.color.main};
  color: ${theme.color.button_text};
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
  width: ${(props) => (props.width ? props.width : "400px")};
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.color.main};
  }

  ${(props) =>
    !props.disableHover &&
    css`
      &:hover {
        background-color: ${theme.color.main_color};
      }
    `}

  ${(props) =>
    props.wh === "s" &&
    css`
      width: 110px;
      height: 45px;
      font-size: 13px;
    `}

  ${(props) =>
    props.wh === "m" &&
    css`
      width: 160px;
      height: 50px;
      font-size: 15px;
    `}    

${(props) =>
    props.wh === "l" &&
    css`
      width: 400px;
      height: 50px;
      font-size: 16px;
    `}
`;

export default Button;
