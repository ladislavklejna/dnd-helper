import React, { useEffect, useState } from "react";
import { Button, Badge, Row, Col } from "reactstrap";
import "./Values.css";

const data = [
  { id: 1, name: "d4", value: 4 },
  { id: 2, name: "d6", value: 6 },
  { id: 3, name: "d8", value: 8 },
  { id: 4, name: "d10", value: 10 },
  { id: 5, name: "d12", value: 12 },
  { id: 6, name: "d20", value: 20 },
];

const Values = () => {
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
    poleKostek.sort();
    setVypis(poleKostek);
  };

  return (
    <div>
      <Row>
        {data.map((dice) => (
          <Col key={dice.id} xs={4} className="one-dice mt-5 xxx">
            <Button onClick={() => handleClick(dice.id)} value={dice.value}>
              {dice.name}
            </Button>
            {getCount(dice.id) > 0 && (
              <Badge color="primary" pill>
                {getCount(dice.id)}
              </Badge>
            )}
          </Col>
        ))}
      </Row>

      {clickedIds.length > 0 && (
        <Button className="green" color="dark" onClick={roll}>
          ROLL
        </Button>
      )}
      <h1 className="text-center mt-5">{vypis.join(" + ")}</h1>
      <h1 className="text-center vysledek mt-5">{sum}</h1>
    </div>
  );
};

export default Values;
