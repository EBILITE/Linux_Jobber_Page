import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GrStatusGood } from "react-icons/gr";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CardSection1 = () => {
  const [values, setValues] = useState({
    isStudent: false,
    isGraduate: false,
    isPostGarduate: false,
    isCompleted: false,
  });
  return (
    <Wrapper>
      <div className="Card-Container">
        <p className="TradeMark">
          <GrStatusGood />
        </p>
        <div className="FormCard">
          <form>
            {/* =========================== 1 ============================= */}
            <div className="form-1 form">
              <span>1. </span>
              <div>
                <label htmlFor="Cos" className="form-label">
                  Course of Study in School:
                </label>
                <br></br>
                <input
                  id="Cos"
                  type="text"
                  className="form-input"
                  placeholder="course of study"
                />
              </div>
            </div>

            {/* ========================== 2 =========================== */}
            <div className="form-2 form">
              <span>2. </span>
              <div>
                <div className="label">
                  <label htmlFor="student" className="form-label">
                    Are You a Student?
                  </label>
                  {!values.isStudent && <p>Yes</p>}
                </div>

                {values.isStudent ? (
                  <div className="btn-flex">
                    <button className="btn">Yes</button>
                    <button className="btn">No</button>
                  </div>
                ) : (
                  <div className="input-flex">
                    <input type="text" placeholder="Course of Study" />
                    <input
                      type="text"
                      placeholder="Expected Year of Graduation"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* ========================== 3 ================================= */}

            <div className="form-3 form">
              <span>3. </span>
              <div>
                <div className="label">
                  <label htmlFor="Graduate" className="form-label">
                    Did You Graduate?
                  </label>
                  {!values.isGraduate && <p>Yes</p>}
                </div>

                {values.isGraduate ? (
                  <div className="btn-flex">
                    <button className="btn">Yes</button>
                    <button className="btn">No</button>
                  </div>
                ) : (
                  <div>
                    <input type="text" placeholder="Current Occupation" />
                  </div>
                )}
              </div>
            </div>

            {/* ======================= 4 ============================= */}
            <div className="form-4 form">
              <span>4. </span>
              <div>
                <div className="label">
                  <label htmlFor="Post-Graduate" className="form-label">
                    Does your country require post-graduation service?
                  </label>
                  {!values.isPostGarduate && <p>Yes</p>}
                </div>

                {values.isPostGarduate ? (
                  <div className="btn-flex">
                    <button className="btn">Yes</button>
                    <button className="btn">No</button>
                  </div>
                ) : (
                  <div className="comp">
                    <div className="label">
                      <label className="form-label">Have You Completed?</label>
                      {values.isCompleted && <p>Yes</p>}
                    </div>
                    {/* <br></br> */}
                    <div className="btn-flex">
                      <button className="btn">Yes</button>
                      <button className="btn">No</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className="next">
        {" "}
        <p>next step</p> <IoIosArrowDroprightCircle />
      </button>
    </Wrapper>
  );
};

export default CardSection1;

const Wrapper = styled.div`
  /* border: 2px solid green; */
  width: 40%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  position: relative;
  .TradeMark {
    text-align: end;
    padding-top: 10px;
    padding-right: 20px;
    svg {
      font-size: 22px;
    }
  }
  .FormCard {
    /* border: 2px solid red; */
    form {
      margin: 15px;
      span {
        color: crimson;
        padding-right: 5px;
      }
      input {
        border-radius: 4px;
        border-style: none;
        background-color: #e5e5e5;
        padding-top: 5px;
        padding-bottom: 5px;
        text-indent: 5px;
      }
    }
  }
  .input-flex {
    width: 60%;
    display: flex;
    gap: 1rem;
  }
  .form {
    /* border: 2px solid blue; */
    padding-bottom: 45px;
    display: flex;
  }
  .btn-flex {
    display: flex;
    gap: 1rem;
    padding-bottom: 5px;
  }
  .label {
    display: flex;
    gap: 1rem;
    p {
      color: crimson;
    }
  }
  .btn {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    border-style: none;
    margin-bottom: 5px;
  }
  .comp {
    margin-top: 10px;
  }
  .next {
    position: absolute;
    right: 180px;
    bottom: -25px;
    padding: 15px;
    border-radius: 5px;
    border-style: none;
    background: #066aef;
    text-transform: capitalize;
    color: white;
    display: flex;
    align-items: center;
    gap: .5rem;
    svg{
      font-size: 22px;
      color: white
    }
  }
`;
