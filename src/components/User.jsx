import React from "react";
import { useDispatch } from "react-redux";
import { __followUser, __unFollowUser } from "../redux/modules/sweetSlice";

import styled from "styled-components";
import {
  FlexAttribute,
  UserImageStyle,
  UserInfomaitionText,
} from "../style/Mixin";

import Button from "../elements/Button";

import TwitterLogo from "../assets/TwitterLogo.jpg";

const User = ({ item }) => {
  const dispatch = useDispatch();

  const followHandler = (username) => {
    dispatch(__followUser(username));
  };

  const unFollowHandler = (username) => {
    dispatch(__unFollowUser(username));
  };
  return (
    <UserListContainer>
      <UserImage
        src={item.profileImage == null ? TwitterLogo : item.profileImage}
      ></UserImage>
      <UserInfomaition>
        <UserInfo name="true">{item.username}</UserInfo>
        <UserInfo>@{item.userId}</UserInfo>
      </UserInfomaition>
      {item.followCheck ? (
        <Button wh="s" onClick={() => unFollowHandler(item.username)}>
          취소
        </Button>
      ) : (
        <Button wh="s" onClick={() => followHandler(item.username)}>
          Follow
        </Button>
      )}
    </UserListContainer>
  );
};

const UserListContainer = styled.div`
  ${FlexAttribute("row", "center", "space-between")}
  :not(:first-child) {
    margin-top: 20px;
  }
`;

const UserInfomaition = styled.div`
  ${FlexAttribute("column")}
  flex-basis: 110px;
`;

const UserImage = styled.img`
  ${UserImageStyle}
`;

const UserInfo = styled.span`
  ${UserInfomaitionText}
`;

export default User;
