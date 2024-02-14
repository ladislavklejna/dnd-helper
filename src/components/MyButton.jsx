import React from "react";
import { Button } from "reactstrap";

const MyButton = ({ id, label, color, buttonHandler }) => {
  return (
    <Button color={color} id={id} onClick={buttonHandler}>
      {label}
    </Button>
  );
};

export default MyButton;
