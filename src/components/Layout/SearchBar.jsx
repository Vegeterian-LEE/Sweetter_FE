import React from "react";
import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <>
      <div>
        <SearchBarContainer>
          <SearchForm>
            <FiSearch size={25} />
            <SearchSweetterInput placeholder="serch"></SearchSweetterInput>
          </SearchForm>
          <FollowListWrapper>Follow List</FollowListWrapper>
        </SearchBarContainer>
      </div>
    </>
  );
};

const SearchBarContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28vw;
  padding: 17px;
`;

const SearchSweetterInput = styled.input`
  padding-left: 17px;
  border-radius: 20px;
  height: 40px;
  background-color: #eff3f4;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border-radius: 25px;
  width: 85%;
  padding-left: 20px;
  background-color: #eff3f4;
`;

const FollowListWrapper = styled.div`
  width: 85%;
  min-height: 400px;
  margin-top: 20px;
  border-radius: 25px;
  background-color: #eff3f4;
`;

export default SearchBar;
