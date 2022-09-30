import React from "react";
import styled from "styled-components";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import logo from '../../assets/LinuxLogo.svg'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <h2>Classroom Profile</h2>
        <div className="class">
          <h2>Go To Classroom</h2>
          <IoIosArrowDroprightCircle />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 5rem;
  .nav {
    /* border: 2px solid red; */
    height: 100%;
    max-width: 1170px;
    width: 95vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: white;
    }
    margin: 0 auto;
  }
  .class {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      font-size: 22px;
      color: white;
    }
  }
`;
