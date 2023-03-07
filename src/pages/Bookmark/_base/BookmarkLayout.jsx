import React from "react";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../../style/Mixin";

import Navbar from "../../../elements/Navbar";
// import Post from "../elements/Post";

const BookmarkLayout = () => {
  return (
    <>
      <PostLayoutContainer>
        <Navbar category="Bookmark"></Navbar>
        {/* <Post /> */}
      </PostLayoutContainer>
    </>
  );
};

const PostLayoutContainer = styled.div`
  ${CenterLayoutBorder}
`;

export default BookmarkLayout;
