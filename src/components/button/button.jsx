import React from "react";
import styled from "styled-components";
// background: ${(props) => (props.choco ? "none" : "#FCEA4A")};

const CustomButton = styled.button`
  width: ${(props) => (props.big ? "235px" : "139px")};
  height: ${(props) => (props.big ? "58px" : "38px")};
  background:  #03663e;
  cursor: pointer;
  border: none;

  border-radius: 0px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.big ? "20px" : "15px")};
  line-height: 33px;
  outline: none;
  color: white;

  @media only screen and (max-width: 1200px) {
    width: 200px;
    height: 40px;
    font-size: 18px;
  }

  @media only screen and (max-width: 800px) {
    width: 150px;
    height: 42px;
    font-size: 12px;
  }

  @media only screen and (max-width: 600px) {
    width: 120px;
    height: 40px;
    font-size: 13.5px;
  }

  &:hover {
    background: white;
    color: #03663e;
    transform: translateY(-0.6px);
    border: solid 1px #03663e;
  }
  &:active {
    transform: translateY(0.6px);
  }
`;

const Button = ({ onClick, to, value, ...props }) => {
  return (
    <div>
      <CustomButton onClick={onClick} to={to} {...props}>
        {value}
      </CustomButton>
    </div>
  );
};

export default Button;
