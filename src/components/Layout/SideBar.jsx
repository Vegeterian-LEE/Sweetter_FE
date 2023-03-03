import React from "react";
import styled from "styled-components";

import { FaTwitter, FaHome, FaBookmark, FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxDotsHorizontal } from "react-icons/rx";

const SideBar = () => {
  const CategoryArr = [
    { title: "Sweeter", icon: <FaTwitter /> },
    { title: "Home", icon: <FaHome /> },
    { title: "Bookmark", icon: <FaBookmark /> },
    { title: "Profile", icon: <CgProfile /> },
  ];
  return (
    <SideBarLayoutContainer>
      <div>
        {CategoryArr.map((item, index) => {
          return (
            <CategoryWrapper key={index}>
              <CategoryBox>
                {item.icon}
                <Span>{item.title}</Span>
              </CategoryBox>
            </CategoryWrapper>
          );
        })}
      </div>
      <div>
        <CategoryWrapper>
          <CategoryBox>
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  padding: 0 10px 10px 10px;
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

export default SideBar;
