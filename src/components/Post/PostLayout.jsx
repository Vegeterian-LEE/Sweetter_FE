import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../style/Mixin";

import PostLayoutNavbar from "./PostLayoutNavbar";
import SweetPosting from "../elements/SweetPosting";
import Post from "../elements/Post";

import { __getPostHome } from "../../redux/modules/sweetSlice";

const PostLayout = () => {
  const dispatch = useDispatch();

  const postLists = useSelector((state) => state.sweets);

  useEffect(() => {
    dispatch(__getPostHome());
  }, [dispatch]);

  return (
    <PostLayoutContainer>
      <PostLayoutNavbar></PostLayoutNavbar>
      <SweetPosting></SweetPosting>
      {postLists.allPostResponse.map((item) => {
        return <Post key={item.id} item={item}></Post>;
      })}
    </PostLayoutContainer>
  );
};

const PostLayoutContainer = styled.div`
  ${CenterLayoutBorder}
`;

export default PostLayout;
