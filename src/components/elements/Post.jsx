import React from "react";

import styled from "styled-components";
import {
  FlexAttribute,
  IconStyle,
  PostText,
  UserImageStyle,
  UserInfomaitionText,
} from "../../style/Mixin";
import theme from "../../style/Theme";

import TwitterLogo from "../../assets/TwitterLogo.jpg";

import { FaCommentAlt, FaHeart } from "react-icons/fa";
import { IoMdRepeat } from "react-icons/io";

const Post = ({ item }) => {
  console.log("post", item);
  return (
    <>
      <PostContainer>
        <PostWrapper>
          <UserImage>
            <img src={TwitterLogo} alt="userimage" />
          </UserImage>
          <PostContentsWrapper>
            <UserInfomation>
              <UserInfo name="true">{item.username}</UserInfo>
              <UserInfo>@{item.userId}</UserInfo>
            </UserInfomation>
            <PostContents>{item.content}</PostContents>
            <PostButtonWrapper>
              <IconBox>
                <FaCommentAlt />
              </IconBox>
              <IconBox>
                <FaHeart />
              </IconBox>
              <IconBox>
                <IoMdRepeat />
              </IconBox>
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

const UserImage = styled.div`
  img {
    ${UserImageStyle}
  }
`;

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
  svg {
    font-size: 20px;
  }
`;

const IconBox = styled.div`
  ${IconStyle}
  width: 25px;
  height: 25px;
`;

export default Post;
