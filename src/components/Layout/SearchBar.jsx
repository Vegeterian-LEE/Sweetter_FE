import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUserList, __searchUser } from "../../redux/modules/sweetSlice";

import styled from "styled-components";
import { FlexAttribute } from "../../style/Mixin";
import theme from "../../style/Theme";

import User from "../../elements/User";

import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const dispatch = useDispatch();
  const userLists = useSelector((state) => state.sweets.userLists);

  useEffect(() => {
    dispatch(__getUserList());
  }, []);

  // 쓰로틀
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchWord !== "") {
        setSearchWord(searchWord);
        dispatch(__searchUser(searchWord));
      }
      if (searchWord === "") {
        dispatch(__getUserList());
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchWord]);

  return (
    <>
      <div>
        <SearchBarContainer>
          <SearchForm>
            <FiSearch size={25} />
            <SearchSweetterInput
              name="searchWord"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="serch sweetter 🐥"
            ></SearchSweetterInput>
          </SearchForm>
          <FollowListWrapper>
            {userLists.map((item) => {
              return <User key={item.userId} item={item}></User>;
            })}
          </FollowListWrapper>
        </SearchBarContainer>
      </div>
    </>
  );
};

const SearchBarContainer = styled.div`
  position: sticky;
  z-index: 5;
  top: 0;
  ${FlexAttribute("column", "center", "")}
  width: 28vw;
  padding: 17px;
`;

const SearchSweetterInput = styled.input`
  padding-left: 17px;
  border-radius: 20px;
  height: 40px;
  background-color: ${theme.color.search_background};
`;

const SearchForm = styled.form`
  ${FlexAttribute("row", "center")}
  border-radius: 25px;
  width: 85%;
  padding-left: 20px;
  background-color: ${theme.color.search_background};
`;

const FollowListWrapper = styled.div`
  width: 85%;
  min-height: 400px;
  margin-top: 20px;
  padding: 15px;
  border-radius: 25px;
  background-color: ${theme.color.search_background};
`;

export default SearchBar;
