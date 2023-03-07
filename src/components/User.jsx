import React from "react";

import styled from "styled-components";
import {
  FlexAttribute,
  UserImageStyle,
  UserInfomaitionText,
} from "../style/Mixin";

import Button from "../elements/Button";

import TwitterLogo from "../assets/TwitterLogo.jpg";

const User = ({ item }) => {
  return (
    <UserListContainer>
      <UserImage
        src={item.profileImage == null ? TwitterLogo : item.profileImage}
      ></UserImage>
      <UserInfomaition>
        <UserInfo name="true">{item.username}</UserInfo>
        <UserInfo>@{item.userId}</UserInfo>
      </UserInfomaition>
      <Button wh="s">Follow</Button>
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
