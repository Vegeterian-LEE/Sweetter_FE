import React from "react";
import styled from "styled-components";

const PostLayoutNavbar = () => {
  return (
    <div>
      <NavBar>
        <NavBarTitle>Home</NavBarTitle>
        <NavBarBtnContainer>
          <BtnWrapper>
            <Button>ALL</Button>
            <StateBar />
          </BtnWrapper>
          <BtnWrapper>
            <Button>Follwing</Button>
            <StateBar />
          </BtnWrapper>
        </NavBarBtnContainer>
      </NavBar>
    </div>
  );
};

const NavBar = styled.div`
  width: 33vw;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.5);
`;

const NavBarTitle = styled.h2`
  font-size: 26px;
  margin: 20px;
`;

const NavBarBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 50px;
  font-size: 18px;
`;

const StateBar = styled.div`
  background-color: #1c9bef;
  width: 100px;
  height: 5px;
  border-radius: 2px;
`;

export default PostLayoutNavbar;
