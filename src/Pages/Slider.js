import React from "react";
import styled from "styled-components";
import Good from "../assets/RedMark.svg";
import { SliderComponent } from "../components";

const Slider = () => {
  return (
    <Wrapper>
      <div className="holder">
        <div>
          <div className="header">
            <div></div>
            <img src={Good} alt="" />
          </div>

          <h4>Score your level of interest in these job titles:</h4>
        </div>
        <div className="SliderCon">
          <SliderComponent name="Frontend Developer" />
          <SliderComponent name="Backend Developer" />
          <SliderComponent name="DevOps " />
          <SliderComponent name="CyberSecurity " />
          <SliderComponent name="Product Designer" />
          <SliderComponent name="Product Manager" />
          <SliderComponent name="Quality Asssurance" />
          <SliderComponent name="Program Manager" />
        </div>
        <h4 className="error"> You cannot pick a number twice</h4>
      </div>
      <button>Done</button>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  width: 40rem;
  padding: 30px;
  border-radius: 15px;
  .holder {
    position: relative;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .SliderCon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .error {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  button {
    background: #066aef;
    color: white;
    font-size: 22px;
    padding: 15px 40px;
    border-radius: 5px;
    border-style: none;
    position: absolute;
    left: 850px;
  }
`;
