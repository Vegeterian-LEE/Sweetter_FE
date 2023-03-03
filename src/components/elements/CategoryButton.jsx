import React from "react";

import styled from "styled-components";

const CategoryButton = ({ children }) => {
  return (
    <>
      <BtnWrapper>
        <Button>{children}</Button>
        <StateBar />
      </BtnWrapper>
    </>
  );
};

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

export default CategoryButton;
