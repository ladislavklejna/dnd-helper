import React, { useState } from "react";
import "./HeroHUD.css";
import { FaHeartPulse } from "react-icons/fa6";
import { Row, Col, Button, Input } from "reactstrap";
import { FaDribbbleSquare } from "react-icons/fa";
const Hero = () => {
  const [windowHpShow, setWindowHpShow] = useState(false);
  const [dmgOrHealValue, setDmgOrHealValue] = useState(0);
  const data = Object.entries(JSON.parse(localStorage.getItem("hero")));
  const bonuses = JSON.parse(localStorage.getItem("bonus"));
  const name = JSON.parse(localStorage.getItem("name"));

  const [hp, setHp] = useState(Number(JSON.parse(localStorage.getItem("hp"))));
  console.log(bonuses);

  const hpWindow = () => {
    setWindowHpShow(!windowHpShow);
  };
  const heal = () => {
    setHp(hp + dmgOrHealValue);
    setTimeout(() => {
      setWindowHpShow(!windowHpShow);
    }, 2000);
  };
  const damage = () => {
    setHp(hp - dmgOrHealValue);
    setWindowHpShow(!windowHpShow);
  };
  const [showRests, setShowRests] = useState(false);
  console.log(dmgOrHealValue);
  return (
    <div>
      <Row>
        <Col>
          <Button onClick={() => setShowRests(true)}>Odpocinek</Button>
        </Col>
        <Col>{name}</Col>
        <Col className="hp">
          <Button onClick={hpWindow}>
            {hp} / {hp}
          </Button>
          {/* HP  WINDOW */}
          {windowHpShow && (
            <Row>
              <div className="slide-in-right">
                <Col xs={12}></Col>
                <Row>
                  <Col>
                    <Button name="damage" color="danger" onClick={damage}>
                      Zraneni
                    </Button>
                  </Col>
                  <Col>
                    <FaHeartPulse size={60} />
                    {hp}
                  </Col>
                  <Col>
                    <Button
                      name="heal"
                      className="heal"
                      color="success"
                      onClick={heal}
                    >
                      Leceni
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className="offset-3">
                    <Input
                      type="number"
                      onChange={(e) =>
                        setDmgOrHealValue(Number(e.target.value))
                      }
                    />
                  </Col>
                </Row>
                <Button onClick={hpWindow}>Potvrdit</Button>
              </div>
            </Row>
          )}
          {/* HP  WINDOW  OUT*/}
        </Col>
      </Row>
      {showRests && (
        <div>
          <Row className="rest-option">
            <Col>
              <Button>Short</Button>
            </Col>
            <Col>
              <Button>Long</Button>
            </Col>
          </Row>
          <Row>
            <Button onClick={() => setShowRests(false)}>Potvrdit</Button>
          </Row>
        </div>
      )}
      <Row>
        {data.map((xx, index) => (
          <Col key={index} xs={4} className="mt-3">
            <div className="atributy">
              <p className="text-center name-atribut">{xx[0]}</p>
              <p className="number-atribut">{xx[1]}</p>
              <div className="atributy-bonus">
                <p className="text-center number-bonus">
                  {bonuses[index] > 0 ? "+" + bonuses[index] : bonuses[index]}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Hero;
