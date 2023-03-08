import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import useOutSideClick from "../hooks/useOutsideClick";
import { useParams } from "react-router-dom";

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
import { __deleteComment, __likeComment } from "../redux/modules/commentsSlice";
import { __getPostDetail } from "../redux/modules/sweetSlice";

const Comment = ({ item }) => {
  const { userId, username } = JSON.parse(localStorage.getItem("userInfo"));
  const { id } = useParams();

  const dispatch = useDispatch();

  const deleteComment = (commentId) => {
    dispatch(__deleteComment(commentId)).then(() => {
      dispatch(__getPostDetail(Number(id)));
    });
  };

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const handleCommentModalClose = () => {
    setIsCommentModalOpen(false);
  };

  const commentModalRef = useRef(null);
  useOutSideClick(commentModalRef, handleCommentModalClose);

  const likeCommentHandler = () => {
    dispatch(__likeComment(item.id)).then(() => {
      dispatch(__getPostDetail(Number(id)));
    });
  };

  // item = 개별 댓글 하나하나를 의미함
  return (
    <>
      <PostContainer>
        <PostWrapper>
          <UserImage>
            <img src={TwitterLogo} alt="userimage" />
          </UserImage>
          <PostContentsWrapper>
            {username === item.username && (
              <IconBox onClick={() => deleteComment(item.id)}>
                <FaTrash />
              </IconBox>
            )}

            <div>
              <UserInfoWrapper>
                <UserInfomation>
                  <UserInfo name="true">{item.username}</UserInfo>
                  <UserInfo>@{userId}</UserInfo>
                </UserInfomation>
              </UserInfoWrapper>
              <PostContents>{item.content}</PostContents>
            </div>

            <PostButtonWrapper>
              <IconBox>
                <FaHeart
                  cursor="pointer"
                  color={item.likeCheck ? "red" : "lightgray"}
                  size="24"
                  onClick={likeCommentHandler}
                />
                <StlikeText>{item.likeCount}</StlikeText>
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

const StlikeText = styled.div`
  margin-left: 10px;
`;

export default Comment;
