import React from "react";
import { PhotoSection, CardSection1 } from "../components";
import styled from "styled-components";

const ProfilePage = () => {
  return (
    <Wrapper>
      <PhotoSection />
      <CardSection1 />
      {/* <div></div> */}
    </Wrapper>
  );
};

export default ProfilePage;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 95vw;
  max-width: 1170px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  margin-top: 5rem;
  gap: 5rem;
`;
