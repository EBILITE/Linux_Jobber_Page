import React from "react";
import styled from "styled-components";

const QuesButton = ({ Yes, No }) => {
  return (
    <Wrapper>
      <button>{Yes}</button>
      <button>{No}</button>
    </Wrapper>
  );
};

export default QuesButton;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  button {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    border-style: none;
  }
`;
