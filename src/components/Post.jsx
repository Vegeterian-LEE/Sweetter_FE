import React from "react";
import styled from "styled-components";

import { FaUserCircle, FaCommentAlt, FaHeart } from "react-icons/fa";
import { IoMdRepeat } from "react-icons/io";

const Post = () => {
  return (
    <>
      <PostContainer>
        <PostWrapper>
          <UserImage>
            <FaUserCircle size={55} />
          </UserImage>
          <PostContentsWrapper>
            <UserInfo>
              <h2>User Name</h2>
              <h2>User ID</h2>
            </UserInfo>
            <PostContents>hi i'm sweeter</PostContents>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 44vw;
  padding-top: 15px;
  padding-bottom: 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const UserImage = styled.div``;

const UserInfo = styled.div`
  display: flex;
  h2 {
    margin-left: 10px;
  }
`;

const PostContentsWrapper = styled.div`
  width: 80%;
  margin-left: 10px;
`;

const PostContents = styled.p`
  margin-top: 17px;
  margin-left: 10px;
`;

const PostButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export default Post;
