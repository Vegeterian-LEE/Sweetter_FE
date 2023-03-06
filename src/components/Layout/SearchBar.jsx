import React from "react";

import styled from "styled-components";
import { FlexAttribute } from "../../style/Mixin";
import theme from "../../style/Theme";

import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <>
      <div>
        <SearchBarContainer>
          <SearchForm>
            <FiSearch size={25} />
            <SearchSweetterInput placeholder="serch sweetter 🐥"></SearchSweetterInput>
          </SearchForm>
          <FollowListWrapper></FollowListWrapper>
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
  border-radius: 25px;
  background-color: ${theme.color.search_background};
`;

export default SearchBar;
