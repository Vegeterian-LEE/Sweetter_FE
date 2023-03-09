import React from "react";

import styled from "styled-components";
import { FlexAttribute } from "../../style/Mixin";

import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <SideBar />
      {children}
      <SearchBar />
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  ${FlexAttribute()}
`;

export default Layout;
