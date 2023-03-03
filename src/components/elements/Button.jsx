import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const TwitterButton = styled.button`
background-color: #4DA0EB;
color: #fff;
border: none;
border-radius: 50px;
font-size: 16px;
font-weight: bold;
width: 400px;
height: 50px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
background-color: #0c85d0;
}

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

const Button = ({ children, ...props }) => {
  return (
    <TwitterButton wh={props.wh} onClick={props.onClick}>
      {children}
    </TwitterButton>
  );
};

Button.defaultProps = {
  wh: "m",
  onClick: () => {},
};

export default Button;