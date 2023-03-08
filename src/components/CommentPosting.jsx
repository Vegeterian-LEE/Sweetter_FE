import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import theme from "../style/Theme";
import { FlexAttribute, UserImageStyle } from "../style/Mixin";

import Button from "../elements/Button";

import TwitterLogo from "../assets/TwitterLogo.jpg";

import { useParams } from "react-router-dom";
import { __addComment } from "../redux/modules/commentsSlice";
import { __getPostDetail } from "../redux/modules/sweetSlice";

const CommentPosting = ({ postId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  let postIds = 0;
  if (id == null) {
    postIds = postId;
    console.log(postIds);
  } else {
    postIds = Number(id);
    console.log(postIds);
  }

  const onSubmitButtonHandler = (newComment) => {
    if (newComment.content === "") {
      alert("댓글을 입력해 주세요!");
    } else {
      dispatch(__addComment({ postIds, newComment })).then(() => {
        dispatch(__getPostDetail(id));
      });
    }
  };

  return (
    <>
      {isModalOpen && (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const newComment = {
              content: content,
            };

            onSubmitButtonHandler(newComment);
            setIsModalOpen(false);
          }}
        >
          <SweetPostingContainer>
            <InputWrapper>
              <UserImage>
                <img src={TwitterLogo} alt="userImage" />
              </UserImage>
              <Preview>
                <SweetInput
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  placeholder="Sweet Your Reply"
                ></SweetInput>
              </Preview>
            </InputWrapper>
            <SubmitWrapper>
              <Button wh="s">Sweet</Button>
            </SubmitWrapper>
          </SweetPostingContainer>
        </form>
      )}
    </>
  );
};

const SweetPostingContainer = styled.div`
  ${FlexAttribute("column", "", "center")}
  margin-top: 20px;
  width: 44vw;
`;

const InputWrapper = styled.div`
  ${FlexAttribute("row", "", "center")}
  margin-top: 10px;
`;

const UserImage = styled.div`
  margin-right: 15px;
  img {
    ${UserImageStyle}
  }
`;

const Preview = styled.div`
  ${FlexAttribute("column", "", "center")}
  width: 75%;
`;

const SweetInput = styled.textarea`
  height: 100px;
  font-size: 17px;
  resize: none;
  border-bottom: ${theme.borderline};
`;

const SubmitWrapper = styled.div`
  ${FlexAttribute("row", "center", "space-around")}
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: ${theme.borderline};
  input {
    display: none;
  }
`;

export default CommentPosting;
