import React from "react";
import styled from "styled-components";

import PostLayoutNavbar from "./PostLayoutNavbar";
import SweetPosting from "../SweetPosting";
import Post from "../Post";

const PostLayout = () => {
  return (
    <PostLayoutContainer>
      <PostLayoutNavbar></PostLayoutNavbar>
      <SweetPosting></SweetPosting>
      <Post></Post>
    </PostLayoutContainer>
  );
};

const PostLayoutContainer = styled.div`
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
`;

export default PostLayout;
