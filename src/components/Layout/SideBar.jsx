import React from "react";
import styled from "styled-components";

import { FaTwitter, FaHome, FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  const CategoryArr = [
    { title: "Sweeter", icon: <FaTwitter size={40} /> },
    { title: "Home", icon: <FaHome size={40} /> },
    { title: "Bookmark", icon: <FaBookmark size={40} /> },
    { title: "Profile", icon: <CgProfile size={40} /> },
  ];
  return (
    <>
      {CategoryArr.map((item) => {
        return (
          <CategoryBox>
            {item.icon}
            <Span>{item.title}</Span>
          </CategoryBox>
        );
      })}
    </>
  );
};

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 10px;
  padding: 5px 10px;
  :hover {
    border-radius: 28px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Span = styled.span`
  margin-top: 13px;
  font-size: 30px;
  margin-left: 10px;
`;

export default SideBar;
