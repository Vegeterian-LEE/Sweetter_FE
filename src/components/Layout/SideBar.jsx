import React from "react";
import styled from "styled-components";

import { FaTwitter, FaHome, FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

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
      </div>
      <div>
        <CategoryWrapper>
          <div>User Info</div>
        </CategoryWrapper>
      </div>
    </SideBarLayoutContainer>
  );
};

const SideBarLayoutContainer = styled.div`
  width: 33vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  width: 150px;
  padding-left: 10px;
  padding-bottom: 10px;
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

export default SideBar;
