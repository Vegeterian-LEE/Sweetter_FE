import React from "react";
import { useState, useRef, useEffect } from "react";
import useOutSideClick from "../../hooks/useOutsideClick";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import {
  CategoryBoxStyle,
  CategoryTitleStyle,
  FlexAttribute,
} from "../../style/Mixin";
import theme from "../../style/Theme";

import Button from "../../elements/Button";
import ModalSweetpost from "../modals/ModalSweetpost";
import ModalLogout from "../modals/ModalLogout";
import { __getUserInfo } from "../../redux/modules/usersSlice";

import { FaTwitter, FaHome, FaBookmark, FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxDotsHorizontal } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const userInfo = useSelector((state) => state.users.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getUserInfo());
  }, []);

  const CategoryArr = [
    { title: "Sweeter", icon: <FaTwitter />, linkTo: "/" },
    { title: "Home", icon: <FaHome />, linkTo: "/" },
    { title: "Bookmark", icon: <FaBookmark />, linkTo: "/bookmark" },
    {
      title: "Profile",
      icon: <CgProfile />,
      linkTo: `/profile/${userInfo.id}`,
    },
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

  // const userInfo = getUserInfo();
  // console.log(userInfo);

  // user 정보 조회

  return (
    <>
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
            <FaUserCircle size={50} />
            <UserInfo>
              <div>{userInfo.username}</div>
              <div>@{userInfo.userId}</div>
            </UserInfo>
            <RxDotsHorizontal />
          </CategoryBox>
        </SweetPostingModal>
      </SideBarLayoutContainer>
      {isSweetModalOpen && (
        <ModalSweetpost sweetPostModalRef={sweetPostModalRef} />
      )}
      {isSignoutModalOpen && <ModalLogout signoutModalRef={signoutModalRef} />}
    </>
  );
};

const SideBarLayoutContainer = styled.div`
  position: sticky;
  z-index: 5;
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
  svg {
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
  border: ${theme.borderline};
  border-radius: 5px;
  background-color: ${theme.color.logout_dropdown};
  cursor: pointer;
`;

const LogoutText = styled.p`
  font-weight: bold;
`;

export default SideBar;
