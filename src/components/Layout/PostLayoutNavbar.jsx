import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../elements/Navbar";
import CategoryButton from "../elements/CategoryButton";

const PostLayoutNavbar = () => {
  const [activeButton, setActiveButton] = useState("ALL");

  const handleClick = (category) => {
    setActiveButton(category);
  };

  return (
    <>
      <Navbar category="Home">
        <NavBarBtnContainer>
          <CategoryButton
            onClick={() => handleClick("ALL")}
            active={activeButton === "ALL"}
          >
            ALL
          </CategoryButton>
          <CategoryButton
            onClick={() => handleClick("Follow")}
            active={activeButton === "Follow"}
          >
            Follow
          </CategoryButton>
        </NavBarBtnContainer>
      </Navbar>
    </>
  );
};

const NavBarBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default PostLayoutNavbar;
