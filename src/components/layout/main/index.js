import React from "react";
import Header from "../header";
import { Container } from "./style";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Main;
