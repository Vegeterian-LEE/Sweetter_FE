import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUserList, __searchUser } from "../../redux/modules/sweetSlice";
import _ from "lodash";

import styled from "styled-components";
import { FlexAttribute } from "../../style/Mixin";
import theme from "../../style/Theme";

import User from "../User";

import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const dispatch = useDispatch();
  const userLists = useSelector((state) => state.sweets.userLists);

  useEffect(() => {
    dispatch(__getUserList());
  }, []);

  useEffect(() => {
    if (searchWord !== "") {
      dispatch(__searchUser(searchWord));
    } else {
      dispatch(__getUserList());
    }
  }, [searchWord]);

  useEffect(() => {
    const throttleSearch = _.throttle(() => {
      setSearchWord(searchWord);
    }, 100);
    throttleSearch();
    return () => {
      throttleSearch.cancel();
    };
  }, [searchWord]);

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchWord(value);
  };

  return (
    <div>
      <SearchBarContainer>
        <SearchForm>
          <FiSearch size={25} />
          <SearchSweetterInput
            name="searchWord"
            value={searchWord}
            onChange={searchHandler}
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
