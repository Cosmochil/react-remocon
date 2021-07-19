import React, { useState } from "react";
import styled from "styled-components";

function TempControl() {
  const [tempValue, setTempValue] = useState(10);

  const App = styled.div`
    height: 500px;
    width: 300px;
    background: #f5f5f5;
    border-radius: 20px;
    border-right: 15px solid #b2beb5;
    border-bottom: 15px solid #808080;
    box-shadow: 10px 20px 20px 0px rgba(0, 0, 0, 0.75);
  `;
  const TempDisplayContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    flex-direction: column;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;
  const Button = styled.button`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-size: 3rem;
    color: #ffffff;
    border-bottom: 10px solid rgba(0, 0, 0, 0.2);
    border-right: 10px solid rgba(0, 0, 0, 0.2);
    border-left: 3px solid rgba(0, 0, 0, 0.2);
    border-top: 3px solid rgba(0, 0, 0, 0.2);

    background: ${(props) => (props.background ? props.background : "black")};

    :hover {
      cursor: pointer;
    }

    :focus {
      border: 0;
    }
  `;
  const TempDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    border-left: 5px solid #445e49;
    border-top: 5px solid #55765c;
    color: #172119;
    height: 160px;
    width: 220px;
    font-size: 8rem;
    background: #739a7a;
    font-family: "Digital7Mono";
  `;
  const TempLight = styled.div`
    margin: 10px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: ${(props) => (props.background ? props.background : "black")};
    box-shadow: -5px -5px 25px 10px ${(props) => (props.background ? props.background : "black")};
  `;

  const increaseTemp = () => {
    if (tempValue === 40) return;
    const newTemp = tempValue + 1;
    setTempValue(newTemp);
  };

  const decreaseTemp = () => {
    if (tempValue === -10) return;
    const newTemp = tempValue - 1;
    setTempValue(newTemp);
  };

  return (
    <App>
      <TempDisplayContainer>
        {tempValue > 35 ? (
          <TempLight background={"#D92121"}></TempLight>
        ) : tempValue > 25 ? (
          <TempLight background={"#FF681F"}></TempLight>
        ) : tempValue > 4 && tempValue < 15 ? (
          <TempLight background={"#50BFE6"}></TempLight>
        ) : tempValue < 5 ? (
          <TempLight background={"#AAF0D1"}></TempLight>
        ) : (
          <TempLight background={"#66FF66"}></TempLight>
        )}
        <TempDisplay>{tempValue}</TempDisplay>
      </TempDisplayContainer>
      <ButtonContainer>
        <Button background="red" onClick={() => increaseTemp()}>
          {" "}
          +{" "}
        </Button>
        <Button background="green" onClick={() => decreaseTemp()}>
          {" "}
          -{" "}
        </Button>
      </ButtonContainer>
    </App>
  );
}

export default TempControl;
