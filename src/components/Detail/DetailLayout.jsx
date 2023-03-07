import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPostDetail } from "../../redux/modules/sweetSlice";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../style/Mixin";

import Post from "../elements/Post";
import Navbar from "../elements/Navbar";
import IsLoading from "../elements/IsLoading";

const DetailLayout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sweets);

  useEffect(() => {
    dispatch(__getPostDetail(Number(id)));
  }, [dispatch, id]);

  return (
    <>
      <PostLayoutContainer>
        <Navbar category="Detail"></Navbar>
        {data.isLoading && <IsLoading></IsLoading>}
        <Post item={data.DetailPost}></Post>
      </PostLayoutContainer>
    </>
  );
};

const PostLayoutContainer = styled.div`
  ${CenterLayoutBorder}
`;

export default DetailLayout;
