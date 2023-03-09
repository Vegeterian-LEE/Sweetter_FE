import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../../style/Mixin";

import PostLayoutNavbar from "./PostLayoutNavbar";
import SweetPosting from "../../../components/SweetPosting";
import Post from "../../../components/Post";

import {
  __getBookMark,
  __getPostHome,
} from "../../../redux/modules/sweetSlice";
import IsLoading from "../../../elements/IsLoading";

const PostLayout = () => {
  const dispatch = useDispatch();

  const post = useSelector((state) => state.sweets);

  useEffect(() => {
    dispatch(__getPostHome());
    dispatch(__getBookMark());
  }, [dispatch]);

  return (
    <PostLayoutContainer>
      <PostLayoutNavbar></PostLayoutNavbar>
      <SweetPosting></SweetPosting>
      {post.isLoading && <IsLoading />}
      {post.category === "ALL" &&
        post.allPostResponse?.map((item) => {
          return <Post key={`post-item-${item.id}`} item={item}></Post>;
        })}
      {(post.category === "Follow") ===
        post.followPostResponse?.map((item) => {
          return <Post key={`post-item-${item.id}`} item={item}></Post>;
        })}
    </PostLayoutContainer>
  );
};

const PostLayoutContainer = styled.div`
  ${CenterLayoutBorder}
`;

export default PostLayout;
