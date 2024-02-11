import React from "react";
import { useState } from "react";
import { Button, Container, Row, Col, Input } from "reactstrap";
import { FaDiceD20 } from "react-icons/fa";
import Values from "./Values";

import "./Dice.css";
import ModalWindow from "./ModalWindow";

const Dice = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowDice = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 30);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button
              color="dark"
              className="round-button"
              onClick={handleShowDice}
            >
              <FaDiceD20 className="dice" />
            </Button>
          </Col>
          <ModalWindow open={showModal} />
        </Row>
      </Container>
    </div>
  );
};

export default Dice;
