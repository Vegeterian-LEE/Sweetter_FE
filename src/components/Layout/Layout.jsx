import React from "react";

import styled from "styled-components";
import { FlexAttribute } from "../../style/Mixin";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
};

const LayoutStyle = styled.div`
  ${FlexAttribute()}
`;

export default Layout;
