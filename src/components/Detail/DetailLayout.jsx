import React from "react";
// import { useParams } from "react-router-dom";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../style/Mixin";

import Post from "../elements/Post";
import Navbar from "../elements/Navbar";

const DetailLayout = () => {
  // const { id } = useParams();

  return (
    <>
      <PostLayoutContainer>
        <Navbar category="Detail"></Navbar>
        <Post></Post>
      </PostLayoutContainer>
    </>
  );
};

const PostLayoutContainer = styled.div`
  ${CenterLayoutBorder}
`;

export default DetailLayout;
