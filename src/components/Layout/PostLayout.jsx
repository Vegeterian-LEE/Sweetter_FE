import React from "react";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../style/Mixin";

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
  ${CenterLayoutBorder}
`;

export default PostLayout;
