import React, { useState } from "react";

import styled from "styled-components";
import { FlexAttribute } from "../../../style/Mixin";

import Navbar from "../../../elements/Navbar";
import CategoryButton from "../../../components/CategoryButton";

const PostLayoutNavbar = () => {
  const [activeButton, setActiveButton] = useState("ALL");

  const handleClick = (category) => {
    setActiveButton(category);
  };

  return (
    <>
      <Navbar category="Home">
        <CategoryButtonWrapper>
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
        </CategoryButtonWrapper>
      </Navbar>
    </>
  );
};

const CategoryButtonWrapper = styled.div`
  ${FlexAttribute("row", "none", "space-around")}
`;

export default PostLayoutNavbar;
