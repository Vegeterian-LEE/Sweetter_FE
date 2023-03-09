import React from "react";
import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  __deletePost,
  __getPostHome,
  __likePost,
  __addBookMark,
  __getBookMark,
  __retweetPost,
  __getPostDetail,
} from "../redux/modules/sweetSlice";

import useOutSideClick from "../hooks/useOutsideClick";

import styled, { css } from "styled-components";
import {
  FlexAttribute,
  IconStyle,
  PostImageStyle,
  PostText,
  UserImageStyle,
  UserInfomaitionText,
} from "../style/Mixin";
import theme from "../style/Theme";

import TwitterLogo from "../assets/TwitterLogo.jpg";

import { FaCommentAlt, FaHeart, FaTrash, FaBookmark } from "react-icons/fa";
import { IoMdRepeat } from "react-icons/io";

import ModalComment from "./modals/ModalComment";
import {
  __getLike,
  __getMedia,
  __getReSweetsComments,
  __getSweet,
} from "../redux/modules/profileSlice";

const Post = ({ item }) => {
  console.log(item);
  const { id } = useParams();
  const userInfo = useSelector((state) => state.users.userInfo);
  console.log("userInfo", userInfo);

  const dispatch = useDispatch();
  const deletePost = (postId) => {
    dispatch(__deletePost(postId));
    dispatch(__getPostHome());
  };

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const handleCommentModalClose = () => {
    setIsCommentModalOpen(false);
  };

  const commentModalRef = useRef(null);
  useOutSideClick(commentModalRef, handleCommentModalClose);

  //게시물 좋아요
  const likePostHandler = () => {
    dispatch(__likePost(item.id)).then(() => {
      dispatch(__getPostHome());
      dispatch(__getPostDetail(Number(id)));
      dispatch(__getSweet(Number(id)));
      dispatch(__getMedia(Number(id)));
      dispatch(__getReSweetsComments(Number(id)));
      dispatch(__getLike(Number(id)));
    });
  };

  //게시물 북마크
  const bookMarkHandler = () => {
    dispatch(__addBookMark(item.id)).then(() => {
      dispatch(__getPostHome());
    });
  };

  //게시물 리트윗

  const retweetHandler = () => {
    dispatch(__retweetPost(item.id)).then(() => {
      dispatch(__getPostHome());
    });
  };

  // item 은 개별유저이다.
  return (
    <>
      <PostContainer>
        <PostWrapper>
          <UserImage>
            <img
              src={
                userInfo.profileImage == null
                  ? TwitterLogo
                  : userInfo.profileImage
              }
              alt="userimage"
            />
          </UserImage>
          <PostContentsContainer>
            {userInfo.userId === item.userId && (
              <IconBox onClick={() => deletePost(item.id)} delete="true">
                <FaTrash />
              </IconBox>
            )}
            <Link to={`/detail/${item.id}`}>
              <div>
                <UserInfoWrapper>
                  <UserInfomation>
                    <UserInfo name="true">{item.username}</UserInfo>
                    <UserInfo>@{item.userId}</UserInfo>
                  </UserInfomation>
                </UserInfoWrapper>
                <ContentsWrapper>
                  <PostContents>{item.content}</PostContents>
                  <ImageContents>
                    {item.imageUrls?.map((item, index) => {
                      return <Image key={`image-item-${index}`} src={item} />;
                    })}
                  </ImageContents>
                </ContentsWrapper>
              </div>
            </Link>
            <PostButtonWrapper>
              <IconBox>
                <FaHeart
                  onClick={likePostHandler}
                  color={
                    item.postLikeCheck || item.likeCheck ? "red" : "lightgray"
                  }
                />
                <StlikeText>{item.likeCount}</StlikeText>
              </IconBox>
              <IconBox>
                <FaCommentAlt onClick={() => setIsCommentModalOpen(true)} />
                <StlikeText>{item.commentCount}</StlikeText>
              </IconBox>
              <IconBox>
                <IoMdRepeat
                  onClick={retweetHandler}
                  color={item.retweetCheck ? theme.color.main : "lightgray"}
                />
              </IconBox>
              <IconBox>
                <FaBookmark
                  onClick={bookMarkHandler}
                  color={item.bookmarkCheck ? theme.color.main : "lightgray"}
                />
              </IconBox>
            </PostButtonWrapper>
          </PostContentsContainer>
        </PostWrapper>
      </PostContainer>
      {isCommentModalOpen && (
        <ModalComment commentModalRef={commentModalRef} postId={item.id} />
      )}
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

const PostContentsContainer = styled.div`
  position: relative;
  width: 80%;
  margin-left: 10px;
`;

const ContentsWrapper = styled.div``;

const PostContents = styled.span`
  ${PostText}
`;

const ImageContents = styled.div``;

const Image = styled.img`
  ${PostImageStyle}
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
    :hover {
    cursor: pointer;
  }
`;

const StlikeText = styled.div`
  margin-left: 10px;
`;

export default Post;
