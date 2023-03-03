import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <NavBar>Post Nav bar</NavBar>
    </div>
  );
};

const NavBar = styled.div`
  width: 33vw;
`;

export default Header;
