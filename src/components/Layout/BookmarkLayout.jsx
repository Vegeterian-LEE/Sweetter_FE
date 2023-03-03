import React from "react";
import styled from "styled-components";

import Navbar from "../elements/Navbar";
import Post from "../Post";

const BookmarkLayout = () => {
  return (
    <>
      <PostLayoutContainer>
        <Navbar category="Bookmark"></Navbar>
        <Post></Post>
      </PostLayoutContainer>
    </>
  );
};

const PostLayoutContainer = styled.div`
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
`;

export default BookmarkLayout;
