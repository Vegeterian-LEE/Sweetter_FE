import React from "react";

import styled from "styled-components";

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
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
`;

const NavTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarTitle = styled.h2`
  font-size: 26px;
  padding-left: 2rem;
  margin: 1rem 0;
`;

export default Navbar;
