import React, { useState } from "react";
import styled from "styled-components";

import TwitterLogo from "../../assets/TwitterLogo.jpg";
import Button from "../elements/Button";
import Navbar from "../elements/Navbar";

import { FaRegCalendarAlt } from "react-icons/fa";
import CategoryButton from "../elements/CategoryButton";

const ProfileLayout = () => {
  const [activeButton, setActiveButton] = useState("Sweets");

  const handleClick = (category) => {
    setActiveButton(category);
  };

  return (
    <>
      <PostLayoutContainer>
        <Navbar category="Profile"></Navbar>
        <UserBackground></UserBackground>
        <UserWrapper>
          <UserImageBox>
            <div>
              <Image src={TwitterLogo} />
            </div>
            <Button>Edit</Button>
          </UserImageBox>
          <UserInfomation>
            <h2>User Name</h2>
            <h2>User ID</h2>
          </UserInfomation>
          <UserJoinDate>
            <FaRegCalendarAlt />
            Joined March 2023
          </UserJoinDate>
          <UserFollowInfomation>
            <Following>3 Following</Following>
            <Followers>3 Followers</Followers>
          </UserFollowInfomation>
        </UserWrapper>
        <CategoryButtonWrapper>
          <CategoryButton
            onClick={() => handleClick("Sweets")}
            active={activeButton === "Sweets"}
          >
            Sweets
          </CategoryButton>
          <CategoryButton
            onClick={() => handleClick("Likes")}
            active={activeButton === "Likes"}
          >
            Likes
          </CategoryButton>
          <CategoryButton
            onClick={() => handleClick("Comments")}
            active={activeButton === "Comments"}
          >
            Comments
          </CategoryButton>
        </CategoryButtonWrapper>
      </PostLayoutContainer>
    </>
  );
};

const PostLayoutContainer = styled.div`
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  margin-bottom: 15px;
  padding: 15px 15px 0 15px;
`;

const UserBackground = styled.div`
  height: 225px;
  background-color: gray;
`;

const UserImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  transform: translate(20%, -60%);
  width: 150px;
  height: 150px;
  border: 4px solid white;
  border-radius: 75px;
  object-fit: cover;
`;

const UserInfomation = styled.div``;

const UserJoinDate = styled.div``;

const UserFollowInfomation = styled.div`
  display: flex;
`;

const Following = styled.h2``;

const Followers = styled.h2``;

const CategoryButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default ProfileLayout;
