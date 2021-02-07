import React from "react";
import styled from "styled-components";
// background: ${(props) => (props.choco ? "none" : "#FCEA4A")};

const CustomButton = styled.button`
  width: ${(props) => (props.big ? "235px" : "139px")};
  height: ${(props) => (props.big ? "58px" : "38px")};
  background:  rgba(0, 0, 0, 0);
  cursor: pointer;
  border: ${(props) => (props.yellow ? "solid 1px #FCEA4A" : "solid 1px #fff")};

  border-radius: 0px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.big ? "20px" : "15px")};
  line-height: 33px;
  outline: none;
  color: ${(props) => (props.yellow ? "#333333" : "#fff")};

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
    box-shadow: 5px 8px 9px -10px rgba(0, 0, 0, 0.4);
    transform: translateY(-0.6px);
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
