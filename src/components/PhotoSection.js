import React from "react";
import styled from "styled-components";
import Me from "../assets/Me.jpg";
import PhotoIcon from "../assets/InstaLogo.svg";
import Data from "../utils/Info";
import { HiOutlineLogout } from "react-icons/hi";

const PhotoSection = () => {

  
  
  return (
    <Wrapper>
      <div className="img-container">
        <img src={Me} alt="" className="Photo" />
        <img src={PhotoIcon} alt="" className="PhotoIcon" />
      </div>
      <h4 className="name">Ebilite Uchenna</h4>
      <div>
        {Data.map((info) => {
          const { id, icon, name, dirIcon } = info;
          return (
            <div key={id} className="icon">
              <div className="icon-holder">
                <p>{icon}</p>
                <h4>{name}</h4>
                <span>{dirIcon}</span>
              </div>
            </div>
          );
        })}
        <div className="logOut">
          <HiOutlineLogout />
          <h4>log out</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default PhotoSection;

const Wrapper = styled.div`
  /* border: 2px solid blue; */

  .img-container {
    position: relative;
  }
  .Photo {
    height: 200px;
    border-radius: 10px;
    position: relative;
  }
  .PhotoIcon {
    position: absolute;
    top: 175px;
    left: 78px;
  }
  .name {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  .icon {
    padding-top: 1.5rem;
  }
  .icon-holder {
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: justify;
    padding-bottom: 2px;
    padding-top: 2px;
    svg {
      font-size: 25px;
    }
    p {
      color: #acb7eb;
    }
  }
  .logOut {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    color: #acb7eb;
  }
`;
