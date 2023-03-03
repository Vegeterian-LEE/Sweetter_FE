import React from "react";
import styled from "styled-components";

import Header from "./Header";

const PostLayout = () => {
  return (
    <PostLayoutContainer>
      <Header></Header>
    </PostLayoutContainer>
  );
};

const PostLayoutContainer = styled.div`
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
`;

export default PostLayout;
