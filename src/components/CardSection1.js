import React, { useState } from "react";
import styled from "styled-components";
import { GrStatusGood } from "react-icons/gr";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Reload from "../assets/Reload.svg";
import Bad from "../assets/BadMark.svg";
import { useNavigate } from "react-router-dom";

const CardSection1 = () => {
  const [values, setValues] = useState({
    isStudent: true,
    isGraduate: true,
    isGraduateYesorNo: true,
    isGraduateText: true,
    isGraduateButton: true,
    isGraduateInput: false,

    isCompleted: false,
    isYesorNo: false,
    isMoreQuestion: false,
    // =======================
    isPostGraduate: true,
    isPgText: true,
    isPgButton: true,
    isPgSecQuesCon: false,
    isPgSecQuesInput: true,
    isPgSecQuesBtn: false,
    isPostGraduate2: true,
    isPgText2: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleYes = () => {
    setValues({
      ...values,
      isStudent: false,
      isYesorNo: true,
      isMoreQuestion: true,
    });
  };

  const handleBack = () => {
    setValues({
      ...values,
      isStudent: true,
      isYesorNo: false,
      isMoreQuestion: false,
    });
  };

  const handleNo = () => {
    setValues({ ...values, isStudent: false, isYesorNo: false });
  };

  const handleGraduteYes = () => {
    setValues({
      ...values,
      isGraduateText: false,
      isGraduateButton: false,
      isGraduateInput: true,
      isGraduateYesorNo: true,
    });
  };

  const handleGraduteBack = () => {
    setValues({
      ...values,
      isGraduateText: true,
      isGraduateButton: true,
      isGraduateInput: false,
    });
  };

  const handleGraduateNo = () => {
    setValues({
      ...values,
      isGraduateText: false,
      isGraduateButton: false,
      isGraduateInput: false,
      isGraduateYesorNo: false,
    });
  };

  const handlePgYes = () => {
    setValues({
      ...values,
      isPgText: false,
      isPostGraduate: true,
      isPgButton: false,
      isPgSecQuesCon: true,
      isPgSecQuesBtn: true,
    });
  };
  const handlePgNo = () => {
    setValues({
      ...values,
      isPgText: false,
      isPostGraduate: false,
      isPgButton: false,
      isPgSecQuesCon: false,
      isPgSecQuesBtn: false,
    });
  };
  const handlePgBack = () => {
    setValues({
      ...values,
      isPgText: true,
      isPostGraduate: true,
      isPgButton: true,
      isPgSecQuesCon: false,
      isPgSecQuesBtn: false,
    });
  };
  // const handlePgSecYes = () => {};
  // const handlePgSecNo = () => {};

  const navigate = useNavigate();
  const handleSliderNavigate = () => {
    navigate('/slider')
  }
  return (
    <Wrapper>
      <div className="Card-Container">
        <p className="TradeMark">
          <GrStatusGood />
        </p>
        <div className="FormCard">
          <form onSubmit={handleSubmit}>
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
                  {values.isStudent ? (
                    ""
                  ) : values.isYesorNo ? (
                    <p>Yes</p>
                  ) : (
                    <div className="Bad">
                      <img src={Bad} alt="" onClick={handleBack} />
                      <p>No</p>
                    </div>
                  )}
                </div>
                {values.isStudent && (
                  <div className="btn-flex">
                    <button type="button" className="btn" onClick={handleYes}>
                      Yes
                    </button>
                    <button type="button" className="btn" onClick={handleNo}>
                      No
                    </button>
                  </div>
                )}

                {values.isMoreQuestion && (
                  <div className="input-flex">
                    <input type="text" placeholder="Course of Study" />
                    <input
                      type="text"
                      placeholder="Expected Year of Graduation"
                    />
                    <button type="button" onClick={handleBack}>
                      <img src={Reload} alt="" />
                    </button>
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
                  {values.isGraduateText ? (
                    ""
                  ) : values.isGraduateYesorNo ? (
                    <p>Yes</p>
                  ) : (
                    <div className="Bad">
                      <img src={Bad} alt="" onClick={handleGraduteBack} />
                      <p>No</p>
                    </div>
                  )}
                </div>
                {values.isGraduateButton && (
                  <div className="btn-flex">
                    <button className="btn" onClick={handleGraduteYes}>
                      Yes
                    </button>
                    <button className="btn" onClick={handleGraduateNo}>
                      No
                    </button>
                  </div>
                )}
                {values.isGraduateInput && (
                  <div className="input-flex">
                    <input type="text" placeholder="Current Occupation" />
                    <button onClick={handleGraduteBack}>
                      <img src={Reload} alt="" />
                    </button>
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
                  {values.isPgText ? (
                    ""
                  ) : values.isPostGraduate ? (
                    <p>Yes</p>
                  ) : (
                    <div className="Bad">
                      <img src={Bad} alt="" onClick={handlePgBack} />
                      <p>No</p>
                    </div>
                  )}
                </div>

                {values.isPgButton && (
                  <div className="btn-flex">
                    <button className="btn" onClick={handlePgYes}>
                      Yes
                    </button>
                    <button className="btn" onClick={handlePgNo}>
                      No
                    </button>
                  </div>
                )}

                <div className="comp">
                  {values.isPgSecQuesCon && (
                    <div className="label">
                      <label className="form-label">Have You Completed?</label>
                      {values.isPgText2 ? (
                        ""
                      ) : values.isPostGraduate2 ? (
                        <p>Yes</p>
                      ) : (
                        <div className="Bad">
                          <img src={Bad} alt="" />
                          <p>No</p>
                        </div>
                      )}
                    </div>
                  )}

                  {values.isPgSecQuesBtn && (
                    <div className="btn-flex">
                      <button className="btn">Yes</button>
                      <button className="btn">No</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className="next" onClick={handleSliderNavigate}>
        {" "}
        <p>next step</p> <IoIosArrowDroprightCircle />
      </button>
    </Wrapper>
  );
};

export default CardSection1;

const Wrapper = styled.div`
  /* border: 2px solid green; */
  width: 33rem;
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
    button {
      border-style: none;
      background: transparent;
    }
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
    gap: 0.5rem;
    svg {
      font-size: 22px;
      color: white;
    }
  }
  .Bad {
    display: flex;
    gap: 0.7rem;
    p {
      color: #acb7eb;
    }
  }
`;
