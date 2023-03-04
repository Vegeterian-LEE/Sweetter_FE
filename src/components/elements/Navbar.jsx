import React from "react";

import styled from "styled-components";
import { FlexAttribute } from "../../style/Mixin";
import theme from "../../style/Theme";

const Navbar = ({ category, children }) => {
  return (
    <>
      <NavBar>
        <NavTitleContainer>
          <NavBarTitle>{category}</NavBarTitle>
        </NavTitleContainer>
        {children}
      </NavBar>
    </>
  );
};

const NavBar = styled.div`
  position: sticky;
  top: 0;
  min-height: 50px;
  width: 44vw;
  border-bottom: ${theme.borderline};
  background-color: ${theme.color.navbar_background};
  backdrop-filter: blur(10px);
`;

const NavTitleContainer = styled.div`
  ${FlexAttribute("row", "center")}
`;

const NavBarTitle = styled.h2`
  font-size: 26px;
  padding-left: 2rem;
  margin: 1rem 0;
`;

export default Navbar;
