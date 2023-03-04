import React from "react";
import { useState, useRef } from "react";
import useOutSideClick from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { CategoryBoxStyle, FlexAttribute } from "../../style/Mixin";

import Button from "../elements/Button";
import ModalSweetpost from "../modal/ModalSweetpost";
import ModalLogout from "../modal/ModalLogout";

import { FaTwitter, FaHome, FaBookmark, FaUserCircle } from "react-icons/fa";
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

  return (
    <>
      <>
        <SideBarLayoutContainer>
          <div>
            {CategoryArr.map((item, index) => {
              return (
                <CategoryWrapper key={index} to={item.linkTo}>
                  <CategoryBox>
                    {item.icon}
                    <Span>{item.title}</Span>
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
                    <LogoutText>Log out @userID</LogoutText>
                  </StDropDown>
                </div>
              )}
              <FaUserCircle size={50} />
              <UserInfo>
                <h2>UserName</h2>
                <h2>@UserID</h2>
              </UserInfo>
              <RxDotsHorizontal />
            </CategoryBox>
          </SweetPostingModal>
        </SideBarLayoutContainer>
        {isSweetModalOpen && (
          <ModalSweetpost sweetPostModalRef={sweetPostModalRef} />
        )}
      </>
      {isSignoutModalOpen && <ModalLogout signoutModalRef={signoutModalRef} />}
    </>
  );
};

const SideBarLayoutContainer = styled.div`
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
  svg {
    font-size: 30px;
    size: 10px;
    padding-top: 10px;
  }
  :hover {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Span = styled.span`
  width: 120px;
  margin-top: 13px;
  font-size: 20px;
  margin-left: 10px;
`;

const UserInfo = styled.div`
  ${FlexAttribute("column", "", "center")}
  margin-top: 10px;
`;

const StDropDown = styled.div`
  position: absolute;
  top: -45px;
  left: 0;
  right: 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

const LogoutText = styled.p`
  font-weight: bold;
`;

export default SideBar;
