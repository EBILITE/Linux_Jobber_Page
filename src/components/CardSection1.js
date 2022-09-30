import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GrStatusGood } from "react-icons/gr";
import Question1 from "../utils/Question1";
import QuesButton from "./QuesButton";

const CardSection1 = () => {
  const [state, setState] = useState('Hello');

  useEffect(() => {
    console.log(state);
  }, []);

 

  return (
    <Wrapper>
      <div className="Card-Container">
        <p className="TradeMark">
          <GrStatusGood />
        </p>
        <div className="QuesCard">
          
        </div>
      </div>
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
  .TradeMark {
    text-align: end;
    padding-top: 10px;
    padding-right: 20px;
    svg {
      font-size: 22px;
    }
  }
  
`;





{
  /* {Question1.map((info, _) => {
            const {
              id,
              QuesNo,
              Ques,
              placeholder,
              placeholder1,
              placeholder2,
            } = info;

            return (
              <div key={id} className="Ques-Container">
                <p className="QuesNo">{QuesNo}</p>
                <div>
                  <div>
                    <p className="Ques">{Ques}</p>
                    
                  </div>
                  {id === 1 ? (
                    <input placeholder={placeholder} className="input" />
                  ) : (
                    <QuesButton Yes={placeholder1} No={placeholder2} />
                  )}
                </div>
              </div>
            );
          })} */
}

// =============================


// .QuesCard {
//     /* margin-top: 1rem; */
//     /* padding-right: 20px; */
//   }
//   .Ques-Container {
//     /* border: 2px solid red; */
//     padding: 20px;
//     display: flex;
//     gap: 1rem;
//   }
//   .Ques {
//     padding-bottom: 10px;
//   }
//   .input {
//     width: 22rem;
//     text-indent: 5px;
//     padding: 10px;
//     border-radius: 2px;
//     background: #f1f3fd;
//     outline: none;
//     border-style: none;
//   }
//   .QuesNo {
//     color: crimson;
//   }