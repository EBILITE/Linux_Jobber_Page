import React from "react";
import styled from "styled-components";
import Course from "../utils/Question1";
import Javascript from "../assets/introduction-to-javascript.png";

const CoursePage = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <h5>Your Courses</h5>
        </div>

        <div className="flex-con">
          {/* =========================First Container============================= */}
          <div className="first-div">
            <div className="btn-cont">
              <button> Topics</button>
              <button> Student | 7</button>
            </div>

            <div className="course-list">
              {Course.map((item, _) => {
                const { id, name } = item;
                return (
                  <div key={id} className="courseList">
                    {/* <div> */}
                    <h4>{id}</h4>
                    <h4>{name}</h4>
                    {/* </div> */}
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================second Container===================================== */}
          <div className="second-div">
            <div className="btn-sec">
              <button>Video</button>
              <button>Lab</button>
              <button>Note</button>
              <button>Chat</button>
            </div>
            <div className="img-cont">
              <img src={Javascript} alt="" />
            </div>

            <p>Intro to Computer Science</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CoursePage;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  /* height: 500px; */
  width: 95vw;
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 2rem;
  h5 {
    color: blue;
    font-size: 18px;
  }
  .flex-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding-top: 1.5rem;
  }
  .first-div {
    /* border: 2px solid blue; */
    /* width: 100% */
  }

  .btn-cont {
    display: flex;
    gap: 3rem;

    /* width: 20rem; */
  }
  button {
    padding: 1rem 3rem;
    border-style: none;
    border-radius: 5px;
    color: grey;
  }
  button:hover {
    font-size: 22px;
    color: black;
  }
  .courseList {
    /* border: 2px solid red; */
    /* padding-right: 20px; */
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-left: 20px;
    border-bottom: 2px solid grey;
    h4 {
      font-family: 42px;
    }
  }
  .course-list {
    overflow-y: scroll;
    height: 450px;
    scrollbar-color: rebeccapurple green;
    margin-top: 0.5rem;
    /* border: 2px solid blue; */
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  /* ================================================== */
  .second-div {
    /* border: 2px solid green; */
    /* width: 100%; */
    p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .btn-sec {
    display: flex;
    gap: 0.5rem;
  }
  .img-cont {
    /* border: 2px solid red; */
    width: 90%;
    height: 400px;
    margin-top: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
