import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";

import { FaTwitter, FaHome, FaBookmark, FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxDotsHorizontal } from "react-icons/rx";
import Button from "../elements/Button";

import ModalSweetpost from "../elements/modal/ModalSweetpost";
import ModalLogout from "../elements/modal/ModalLogout";

import useOutSideClick from "../hooks/useOutsideClick";

const SideBar = () => {
  const CategoryArr = [
    { title: "Sweeter", icon: <FaTwitter /> },
    { title: "Home", icon: <FaHome /> },
    { title: "Bookmark", icon: <FaBookmark /> },
    { title: "Profile", icon: <CgProfile /> },
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
            {CategoryArr.map((item) => {
              return (
                <CategoryWrapper>
                  <CategoryBox>
                    {item.icon}
                    <Span>{item.title}</Span>
                  </CategoryBox>
                </CategoryWrapper>
              );
            })}
            <CategoryWrapper>
              <Button onClick={() => setIsSweetModalOpen(true)}>Sweet</Button>
            </CategoryWrapper>
          </div>

          <div>
            <CategoryWrapper>
              <CategoryBox onClick={handleDropdownToggle}>
                {isDropdownOpen && (
                  <StDropDown onClick={() => setIsSignoutModalOpen(true)}>
                    <LogoutText>Log out @userID</LogoutText>
                  </StDropDown>
                )}
                <FaUserCircle size={50} />
                <UserInfo>
                  <h2>UserName</h2>
                  <h2>@UserID</h2>
                </UserInfo>
                <RxDotsHorizontal />
              </CategoryBox>
            </CategoryWrapper>
          </div>
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
  width: 28vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 20px;
  padding: 5px 10px;
`;

const CategoryBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

const StDropDown = styled.div`
  left: 0;
  position: absolute;
  top: -30px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const LogoutText = styled.p`
  font-weight: bold;
`;

export default SideBar;
