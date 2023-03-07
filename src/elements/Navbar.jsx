import React from "react";

import styled from "styled-components";
import theme from "../style/Theme";
import { FlexAttribute } from "../style/Mixin";

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
  z-index: 5;
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
  font-size: ${theme.textsize.category};
  font-weight: 700;
  padding-left: 2rem;
  margin: 1rem 0;
`;

export default Navbar;
