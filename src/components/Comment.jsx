import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { __deletePost } from "../redux/modules/sweetSlice";
import useOutSideClick from "../hooks/useOutsideClick";

import styled, { css } from "styled-components";
import {
  FlexAttribute,
  IconStyle,
  PostText,
  UserImageStyle,
  UserInfomaitionText,
} from "../style/Mixin";
import theme from "../style/Theme";

import TwitterLogo from "../assets/TwitterLogo.jpg";
import { FaHeart, FaTrash } from "react-icons/fa";

import ModalComment from "./modals/ModalComment";

const Comment = ({ item }) => {
  const { userId } = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const deletePost = (postId) => {
    dispatch(__deletePost(postId));
  };

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const handleCommentModalClose = () => {
    setIsCommentModalOpen(false);
  };

  const commentModalRef = useRef(null);
  useOutSideClick(commentModalRef, handleCommentModalClose);

  return (
    <>
      <PostContainer>
        <PostWrapper>
          <UserImage>
            <img src={TwitterLogo} alt="userimage" />
          </UserImage>
          <PostContentsWrapper>
            {userId === item.userId && (
              <IconBox onClick={deletePost(item.id)} delete="true">
                <FaTrash />
              </IconBox>
            )}

            <div>
              <UserInfoWrapper>
                <UserInfomation>
                  <UserInfo name="true">{item.username}</UserInfo>
                  <UserInfo>@{item.userId}</UserInfo>
                </UserInfomation>
              </UserInfoWrapper>
              <PostContents>{item.content}</PostContents>
            </div>

            <PostButtonWrapper>
              <IconBox>
                <FaHeart />
              </IconBox>
            </PostButtonWrapper>
          </PostContentsWrapper>
        </PostWrapper>
      </PostContainer>
      {isCommentModalOpen && <ModalComment commentModalRef={commentModalRef} />}
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

const UserInfoWrapper = styled.div`
  ${FlexAttribute("row", "", "space-between")}
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
  position: relative;
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
  ${(props) =>
    props.delete &&
    css`
      position: absolute;
      top: -10px;
      right: -10px;
      padding: 10px;
      z-index: 1;
      color: #f4212d;
      cursor: pointer;
    `}
`;

export default Comment;
