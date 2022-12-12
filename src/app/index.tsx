import "./style.css";
import BallGame from "./component/BallGame";
import Circle from "./component/Circle";
import React from "react";
import Shape from "./component/Shape";
import Triangle from "./component/Triangle";
import styled from "styled-components";
const Container = styled.div`
  height: 100%;
  position: relative;
  text-align: center;
`;

export const App = () => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <Container>
      <h1 className="App">Canvas Practice</h1>
      <BallGame />
      <Circle />
      <Triangle />
      <Shape />
    </Container>
  );
};
