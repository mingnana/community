import React from "react";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  background-color: blue;
  display: flex;
  flex: 1 0 auto;
  background-color: blue;
`;

const index = () => {
  return (
    <>
      <StyledContainer>index</StyledContainer>
      <div>gg</div>
    </>
  );
};

export default index;
