import React from "react";
import { MdStarBorder, MdStar } from "react-icons/md";
import "./SavingThrow.css";
import { Col, Row } from "reactstrap";
const data = [
  {
    name: "Síla",
    active: false,
  },
  {
    name: "Obratnost",
    active: false,
  },
  {
    name: "Odolnost",
    active: true,
  },
  {
    name: "Inteligence",
    active: false,
  },
  {
    name: "Moudrost",
    active: false,
  },
  {
    name: "Charisma",
    active: true,
  },
];

const SavingThrow = ({ bonuses, proficiencyBonus, handleClick }) => {
  const icoSize = 30;
  return (
    <div>
      {data.map((x, index) => (
        <Row
          key={x.name}
          onClick={() => handleClick(x.name + "-save", x.active)}
        >
          <Col xs={2}>
            <p className="saving-icon">
              {x.active === true ? (
                <MdStar size={icoSize} />
              ) : (
                <MdStarBorder size={icoSize} />
              )}
            </p>
          </Col>
          <Col xs={7}>
            <p className="saving-text">{x.name}</p>
          </Col>
          {x.active === true ? (
            <Col className="save-number" xs={1}>
              {bonuses[index] + proficiencyBonus}
            </Col>
          ) : (
            <Col className="save-number" xs={1}>
              {bonuses[index]}
            </Col>
          )}
        </Row>
      ))}
    </div>
  );
};

export default SavingThrow;
