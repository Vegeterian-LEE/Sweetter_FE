import { React, useState, useRef } from "react";

import styled from "styled-components";
import {
  CenterLayoutBorder,
  FlexAttribute,
  UserInfomaitionText,
} from "../../style/Mixin";
import theme from "../../style/Theme";

import TwitterLogo from "../../assets/TwitterLogo.jpg";
import Button from "../elements/Button";
import Navbar from "../elements/Navbar";
import CategoryButton from "../elements/CategoryButton";
import ModalEdit from "../modal/modals/ModalEdit";

import { FaRegCalendarAlt } from "react-icons/fa";

import useOutSideClick from "../../hooks/useOutsideClick";

const ProfileLayout = () => {
  const [activeButton, setActiveButton] = useState("Sweets");

  const handleClick = (category) => {
    setActiveButton(category);
  };

  //프로필 수정 모달창
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsEditModalOpen(false);
  };
  const editModalRef = useRef(null);
  useOutSideClick(editModalRef, handleModalClose);

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
            <Button onClick={() => setIsEditModalOpen(true)}>Edit</Button>
          </UserImageBox>
          <UserInfomation>
            <UserInfo name={true}>User Name</UserInfo>
            <UserInfo>@User ID</UserInfo>
          </UserInfomation>
          <UserJoinDate>
            <FaRegCalendarAlt />
            <Date>Joined March 2023</Date>
          </UserJoinDate>
          <UserFollowInfomation>
            <Follow>
              <span>3</span> Following
            </Follow>
            <Follow>
              <span>3</span> Followers
            </Follow>
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
      {isEditModalOpen && <ModalEdit editModalRef={editModalRef} />}
    </>
  );
};

const PostLayoutContainer = styled.div`
  ${CenterLayoutBorder}
`;

const UserWrapper = styled.div`
  ${FlexAttribute("column", "", "space-between")}
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
  ${FlexAttribute("row", "", "space-between")}
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

const UserInfomation = styled.div`
  ${FlexAttribute("column")}
`;

const UserInfo = styled.span`
  ${UserInfomaitionText}
  margin-bottom: 5px;
`;

const UserJoinDate = styled.div`
  ${FlexAttribute("row", "center")}
  color: ${theme.color.hazy_text};
`;

const Date = styled.span`
  margin-left: 10px;
  font-size: ${theme.textsize.date};
`;

const UserFollowInfomation = styled.div`
  ${FlexAttribute("row")}
`;

const Follow = styled.div`
  color: ${theme.color.hazy_text};
  span {
    color: black;
    font-size: 17px;
    font-weight: 400;
  }
  :last-child {
    margin-left: 10px;
  }
`;

const CategoryButtonWrapper = styled.div`
  ${FlexAttribute("row", "", "space-around")}
`;

export default ProfileLayout;
