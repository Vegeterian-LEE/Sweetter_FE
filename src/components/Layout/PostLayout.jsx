import React from "react";
import styled from "styled-components";

import PostLayoutNavbar from "./PostLayoutNavbar";

const PostLayout = () => {
  return (
    <PostLayoutContainer>
      <PostLayoutNavbar></PostLayoutNavbar>
    </PostLayoutContainer>
  );
};

const PostLayoutContainer = styled.div`
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
`;

export default PostLayout;
