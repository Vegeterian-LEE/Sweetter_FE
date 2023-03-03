import React from "react";

import styled from "styled-components";

const Navbar = ({ category, children }) => {
  return (
    <>
      <NavBar>
        <NavBarTitle>{category}</NavBarTitle>
        {children}
      </NavBar>
    </>
  );
};

const NavBar = styled.div`
  position: fixed;
  width: 44vw;
  margin-right: 56vw;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.5);
`;

const NavBarTitle = styled.h2`
  font-size: 26px;
  margin: 20px;
`;

export default Navbar;
