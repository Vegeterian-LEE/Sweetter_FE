import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { CenterLayoutBorder } from "../../../style/Mixin";

import {
  __getPostHome,
  __getBookMark,
} from "../../../redux/modules/sweetSlice";

import Navbar from "../../../components/Navbar";
import Isloading from "../../../elements/IsLoading";
import Post from "../../../components/Post";

// import Post from "../elements/Post";

const BookmarkLayout = () => {
  const dispatch = useDispatch();
  const bookMark = useSelector((state) => state.sweets.bookMarkList);
  console.log(bookMark);

  useEffect(() => {
    dispatch(__getPostHome());
    dispatch(__getBookMark());
  }, [dispatch]);

  return (
    <PostLayoutContainer>
      <Navbar category="Bookmark"></Navbar>
      {bookMark.isLoading && <Isloading />}
      {bookMark.map((item) => {
        return <Post key={item.id} item={item}></Post>;
      })}
    </PostLayoutContainer>
  );
};

const PostLayoutContainer = styled.div`
  ${CenterLayoutBorder}
`;

export default BookmarkLayout;
