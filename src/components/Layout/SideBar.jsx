import React from "react";
import { useState, useRef } from "react";
import useOutSideClick from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";

import styled from "styled-components";
import {
  CategoryBoxStyle,
  CategoryTitleStyle,
  FlexAttribute,
  UserImageStyle,
  UserInfomaitionText,
} from "../../style/Mixin";
import theme from "../../style/Theme";

import Button from "../elements/Button";
import ModalSweetpost from "../modal/modals/ModalSweetpost";
import ModalLogout from "../modal/modals/ModalLogout";
import { getUserInfo } from "../../redux/modules/usersSlice";

import TwitterLogo from "../../assets/TwitterLogo.jpg";

import { FaTwitter, FaHome, FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxDotsHorizontal } from "react-icons/rx";

const SideBar = () => {
  const CategoryArr = [
    { title: "Sweeter", icon: <FaTwitter />, linkTo: "/" },
    { title: "Home", icon: <FaHome />, linkTo: "/" },
    { title: "Bookmark", icon: <FaBookmark />, linkTo: "/bookmark" },
    { title: "Profile", icon: <CgProfile />, linkTo: "/profile" },
  ];

  //sweet 모달창
  const [isSweetModalOpen, setIsSweetModalOpen] = useState(false);
  const handleIsSweetModalClose = () => {
    setIsSweetModalOpen(false);
  };
  const sweetPostModalRef = useRef(null);
  useOutSideClick(sweetPostModalRef, handleIsSweetModalClose);

  //로그아웃 메뉴창
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //로그아웃 모달
  const [isSignoutModalOpen, setIsSignoutModalOpen] = useState(false);
  const handleSignoutModalClose = () => {
    setIsSignoutModalOpen(false);
  };
  const signoutModalRef = useRef(null);
  useOutSideClick(signoutModalRef, handleSignoutModalClose);

  const userInfo = getUserInfo();

  return (
    <>
      <div>
        <SideBarLayoutContainer>
          <div>
            {CategoryArr.map((item, index) => {
              return (
                <CategoryWrapper key={index} to={item.linkTo}>
                  <CategoryBox>
                    {item.icon}
                    <CategoryTitle>{item.title}</CategoryTitle>
                  </CategoryBox>
                </CategoryWrapper>
              );
            })}
            <SweetPostingModal>
              <Button onClick={() => setIsSweetModalOpen(true)}>Sweet</Button>
            </SweetPostingModal>
          </div>
          <SweetPostingModal>
            <CategoryBox onClick={handleDropdownToggle}>
              {isDropdownOpen && (
                <div>
                  <StDropDown onClick={() => setIsSignoutModalOpen(true)}>
                    <LogoutText>Log out @{userInfo.userId}</LogoutText>
                  </StDropDown>
                </div>
              )}
              <UserImage>
                <img src={TwitterLogo} alt="userImage" />
              </UserImage>
              <UserInfomation>
                <UserInfo name="true">{userInfo.username}</UserInfo>
                <UserInfo>@{userInfo.userId}</UserInfo>
              </UserInfomation>
              <RxDotsHorizontal size={30} />
            </CategoryBox>
          </SweetPostingModal>
        </SideBarLayoutContainer>
        {isSweetModalOpen && (
          <ModalSweetpost sweetPostModalRef={sweetPostModalRef} />
        )}
      </div>
      {isSignoutModalOpen && <ModalLogout signoutModalRef={signoutModalRef} />}
    </>
  );
};

const SideBarLayoutContainer = styled.div`
  position: sticky;
  top: 0;
  ${FlexAttribute("column", "", "space-between")}
  width: 28vw;
  height: 100vh;
`;

const CategoryWrapper = styled(Link)`
  ${CategoryBoxStyle}
`;

const SweetPostingModal = styled.div`
  ${CategoryBoxStyle}
`;

const CategoryBox = styled.div`
  position: relative;
  ${FlexAttribute("row", "center", "space-around")}
  width: 200px;
  padding: 0 10px 10px 10px;
  cursor: pointer;
  svg:not(:last-child) {
    font-size: 30px;
    size: 10px;
    padding-top: 10px;
  }
  :hover {
    border-radius: 50px;
    background-color: ${theme.color.category_hover};
  }
`;

const CategoryTitle = styled.span`
  ${CategoryTitleStyle}
`;

const UserInfomation = styled.div`
  ${FlexAttribute("column", "", "center")}
`;

const UserImage = styled.div`
  img {
    ${UserImageStyle}
    margin-top: 10px;
  }
`;

const UserInfo = styled.span`
  ${UserInfomaitionText}
  :first-child {
    margin-bottom: 5px;
  }
`;

const StDropDown = styled.div`
  position: absolute;
  top: -45px;
  left: 0;
  right: 0;
  padding: 10px;
  border: ${theme.borderline};
  border-radius: 5px;
  background-color: ${theme.color.logout_dropdown};
  cursor: pointer;
`;

const LogoutText = styled.p`
  font-weight: bold;
`;

export default SideBar;
