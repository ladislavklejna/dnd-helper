import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Badge,
} from "reactstrap";
import "./ModalWindow.css";
const data = [
  { id: 1, name: "d4", value: 4 },
  { id: 2, name: "d6", value: 6 },
  { id: 3, name: "d8", value: 8 },
  { id: 4, name: "d10", value: 10 },
  { id: 5, name: "d12", value: 12 },
  { id: 6, name: "d20", value: 20 },
];

function ModalWindow(props, args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    if (props.open === true) {
      toggle();
    }
  }, [props.open]);

  var poleKostek = [];
  const [clickedIds, setClickedIds] = useState([]);
  const [vypis, setVypis] = useState([]);
  const handleClick = (id) => {
    setClickedIds((prevIds) => [...prevIds, id]);
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  const getCount = (id) => {
    return clickedIds.filter((clickedId) => clickedId === id).length;
  };
  const sum = vypis.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const reset = () => {
    setClickedIds([]);
    setVypis([]);
  };
  const roll = () => {
    clickedIds.sort();
    clickedIds.forEach((element) => {
      if (element === 1) {
        poleKostek.push(getRandomInt(4));
      } else if (element === 2) {
        poleKostek.push(getRandomInt(6));
      } else if (element === 3) {
        poleKostek.push(getRandomInt(8));
      } else if (element === 4) {
        poleKostek.push(getRandomInt(10));
      } else if (element === 5) {
        poleKostek.push(getRandomInt(12));
      } else if (element === 6) {
        poleKostek.push(getRandomInt(20));
      }
    });
    poleKostek.sort((a, b) => a - b);
    setVypis(poleKostek);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Výběr kostek</ModalHeader>
        <ModalBody>
          <Row>
            {data.map((dice) => (
              <Col key={dice.id} xs={4} className="one-dice mt-5 p-2">
                <Button onClick={() => handleClick(dice.id)} value={dice.value}>
                  {dice.name}
                </Button>
                {getCount(dice.id) > 0 && (
                  <Badge className="one-badge" color="danger" pill>
                    {getCount(dice.id)}
                  </Badge>
                )}
              </Col>
            ))}
          </Row>

          <div className="reserve mt-5">
            <p className="rolled-numbers text-center ">{vypis.join(" + ")}</p>
            <p className="rolled-numbers text-center">=</p>
            <p className="text-center vysledek">{sum}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Row className="text-center">
            <Col>
              <Button
                className="one-button"
                color="primary"
                disabled={clickedIds.length === 0}
                onClick={roll}
              >
                Hod
              </Button>
            </Col>
            <Col>
              <Button className="one-button" color="secondary" onClick={reset}>
                Reset
              </Button>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalWindow;
