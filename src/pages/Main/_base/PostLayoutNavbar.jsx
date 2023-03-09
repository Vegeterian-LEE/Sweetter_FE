import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { FlexAttribute } from "../../../style/Mixin";

import Navbar from "../../../components/Navbar";
import CategoryButton from "../../../components/CategoryButton";
import { useDispatch } from "react-redux";
import { toggleCategory } from "../../../redux/modules/sweetSlice";

const PostLayoutNavbar = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("ALL");

  useEffect(() => {
    toggleCategoryHandler(activeButton);
  }, [activeButton]);

  const toggleCategoryHandler = (category) => {
    dispatch(toggleCategory(category));
    handleClick(category);
  };

  const handleClick = (category) => {
    setActiveButton(category);
  };

  return (
    <Navbar category="Home">
      <CategoryButtonWrapper>
        <CategoryButton
          onClick={() => toggleCategoryHandler("ALL")}
          active={activeButton === "ALL"}
        >
          ALL
        </CategoryButton>
        <CategoryButton
          onClick={() => toggleCategoryHandler("Follow")}
          active={activeButton === "Follow"}
        >
          Follow
        </CategoryButton>
      </CategoryButtonWrapper>
    </Navbar>
  );
};

const CategoryButtonWrapper = styled.div`
  ${FlexAttribute("row", "none", "space-around")}
`;

export default PostLayoutNavbar;
