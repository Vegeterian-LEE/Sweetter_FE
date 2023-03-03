import React from "react";
import styled from "styled-components";

import Navbar from "../elements/Navbar";
import CategoryButton from "../elements/CategoryButton";

const PostLayoutNavbar = () => {
  return (
    <div>
      <Navbar category="Home">
        <NavBarBtnContainer>
          <CategoryButton>ALL</CategoryButton>
          <CategoryButton>Follow</CategoryButton>
        </NavBarBtnContainer>
      </Navbar>
    </div>
  );
};

const NavBarBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default PostLayoutNavbar;
