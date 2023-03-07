import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../../style/Mixin";

import PostLayoutNavbar from "./PostLayoutNavbar";
import SweetPosting from "../../../elements/SweetPosting";
import Post from "../../../elements/Post";

import { __getPostHome } from "../../../redux/modules/sweetSlice";
import IsLoading from "../../../elements/IsLoading";

const PostLayout = () => {
  const dispatch = useDispatch();

  const postLists = useSelector((state) => state.sweets);

  useEffect(() => {
    dispatch(__getPostHome());
  }, []);

  return (
    <PostLayoutContainer>
      <PostLayoutNavbar></PostLayoutNavbar>
      <SweetPosting></SweetPosting>
      {postLists.isLoading && <IsLoading />}
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
