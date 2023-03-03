import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
};

const LayoutStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export default Layout;
