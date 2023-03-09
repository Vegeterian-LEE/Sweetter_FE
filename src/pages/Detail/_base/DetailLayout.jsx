import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPostDetail } from "../../../redux/modules/sweetSlice";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../../style/Mixin";

import Post from "../../../components/Post";
import Comment from "../../../components/Comment";
import Navbar from "../../../components/Navbar";
import IsLoading from "../../../elements/IsLoading";

const DetailLayout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sweets);

  useEffect(() => {
    dispatch(__getPostDetail(Number(id)));
  }, [dispatch, id]);

  const commentList = useSelector((state) => state.sweets.commentList);

  return (
    <PostLayoutContainer>
      <Navbar category="Detail"></Navbar>
      {data.isLoading && <IsLoading></IsLoading>}
      <Post item={data.DetailPost}></Post>
      {commentList.map((item) => {
        return <Comment key={item.id} item={item}></Comment>;
      })}
    </PostLayoutContainer>
  );
};

const PostLayoutContainer = styled.div`
  ${CenterLayoutBorder}
`;

export default DetailLayout;
