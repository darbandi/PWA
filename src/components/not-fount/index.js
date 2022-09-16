import React from "react";
import { Conatiner, Circule, Text } from "./style";

const NotFound = ({ text, render }) => {
  return (
    <Conatiner>
      <Circule />
      <Text>{text}</Text>
      {render}
    </Conatiner>
  );
};

export default NotFound;
