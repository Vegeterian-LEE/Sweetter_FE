import React from "react";

import styled from "styled-components";
import {
  FlexAttribute,
  PostText,
  UserInfomaitionText,
} from "../../style/Mixin";
import theme from "../../style/Theme";

import { FaUserCircle, FaCommentAlt, FaHeart } from "react-icons/fa";
import { IoMdRepeat } from "react-icons/io";

const Post = ({ item }) => {
  console.log("post", item);
  return (
    <>
      <PostContainer>
        <PostWrapper>
          <UserImage>
            <FaUserCircle size={55} />
          </UserImage>
          <PostContentsWrapper>
            <UserInfomation>
              <UserInfo name="true">{item.username}</UserInfo>
              <UserInfo>@{item.userId}</UserInfo>
            </UserInfomation>
            <PostContents>{item.content}</PostContents>
            <PostButtonWrapper>
              <FaCommentAlt size={19} />
              <FaHeart size={20} />
              <IoMdRepeat size={23} />
            </PostButtonWrapper>
          </PostContentsWrapper>
        </PostWrapper>
      </PostContainer>
    </>
  );
};

const PostContainer = styled.div`
  ${FlexAttribute("column", "", "center")}
  width: 44vw;
  padding-top: 15px;
  padding-bottom: 17px;
  border-bottom: ${theme.borderline};
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${FlexAttribute("row", "", "center")}
  margin-top: 10px;
`;

const UserImage = styled.div``;

const UserInfomation = styled.div`
  ${FlexAttribute}
`;

const UserInfo = styled.span`
  ${UserInfomaitionText}
  :last-child {
    margin-left: 10px;
  }
`;

const PostContentsWrapper = styled.div`
  width: 80%;
  margin-left: 10px;
`;

const PostContents = styled.span`
  ${PostText}
`;

const PostButtonWrapper = styled.div`
  ${FlexAttribute("row", "", "space-around")}
  margin-top: 20px;
`;

export default Post;
