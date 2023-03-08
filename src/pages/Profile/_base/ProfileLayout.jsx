import { React, useState, useRef, useEffect } from "react";
import useOutSideClick from "../../../hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import {
  CenterLayoutBorder,
  FlexAttribute,
  UserInfomaitionText,
} from "../../../style/Mixin";
import theme from "../../../style/Theme";

import TwitterLogo from "../../../assets/TwitterLogo.jpg";
import Button from "../../../elements/Button";
import Navbar from "../../../components/Navbar";
import CategoryButton from "../../../components/CategoryButton";
import ModalEdit from "../../../components/modals/ModalEdit";
import Post from "../../../components/Post";

import {
  __getSweet,
  __getReSweetsComments,
  __getMedia,
  __getLike,
} from "../../../redux/modules/profileSlice";
import { useParams } from "react-router-dom";

const ProfileLayout = () => {
  const { id } = useParams();
  const userInfo = useSelector((state) => state.users.userInfo);
  const postList = useSelector((state) => state.profile);
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

  // Get Lists
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getSweet(Number(id)));
  }, []);

  const getCategoryList = (category, axios) => {
    handleClick(category);
    dispatch(axios);
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
            <Button onClick={() => setIsEditModalOpen(true)}>Edit</Button>
          </UserImageBox>
          <UserInfomation>
            <UserInfo name="true">{userInfo.username}</UserInfo>
            <UserInfo>@{userInfo.userId}</UserInfo>
          </UserInfomation>
          <UserFollowInfomation>
            <Follow>
              <span>{userInfo.followingnumber}</span> Following
            </Follow>
            <Follow>
              <span>{userInfo.followernumber}</span> Followers
            </Follow>
          </UserFollowInfomation>
        </UserWrapper>
        <CategoryButtonWrapper>
          <CategoryButton
            onClick={() => getCategoryList("Sweets", __getSweet(Number(id)))}
            active={activeButton === "Sweets"}
          >
            Sweets
          </CategoryButton>
          <CategoryButton
            onClick={() =>
              getCategoryList("Comments", __getReSweetsComments(Number(id)))
            }
            active={activeButton === "Comments"}
          >
            ReSweets&Comments
          </CategoryButton>
          <CategoryButton
            onClick={() => getCategoryList("Media", __getMedia(Number(id)))}
            active={activeButton === "Media"}
          >
            Media
          </CategoryButton>
          <CategoryButton
            onClick={() => getCategoryList("Likes", __getLike(Number(id)))}
            active={activeButton === "Likes"}
          >
            Likes
          </CategoryButton>
        </CategoryButtonWrapper>
        {activeButton === "Sweets" &&
          postList.sweetLists?.map((item) => {
            return <Post key={`post-item-${item.id}`} item={item}></Post>;
          })}
        {activeButton === "Comments" &&
          postList.sweetLists?.map((item) => {
            return <Post key={`post-item-${item.id}`} item={item}></Post>;
          })}
        {activeButton === "Media" &&
          postList.sweetandCommentLists?.map((item) => {
            return <Post key={`post-item-${item.id}`} item={item}></Post>;
          })}
        {activeButton === "Likes" &&
          postList.likeLists?.map((item) => {
            return <Post key={`post-item-${item.id}`} item={item}></Post>;
          })}
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
