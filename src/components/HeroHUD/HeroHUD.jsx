import React, { useState } from "react";
import "./HeroHUD.css";
import { FaHeartPulse } from "react-icons/fa6";
import { Row, Col, Button, Input } from "reactstrap";
import { FaDribbbleSquare } from "react-icons/fa";
import ModalWin from "./ModalWin";
const Hero = () => {
  const [windowHpShow, setWindowHpShow] = useState(false);
  const [dmgOrHealValue, setDmgOrHealValue] = useState(0);
  const data = Object.entries(JSON.parse(localStorage.getItem("hero")));
  const bonuses = JSON.parse(localStorage.getItem("bonus"));
  const name = JSON.parse(localStorage.getItem("name"));
  const level = JSON.parse(localStorage.getItem("level"));
  const [showInitiativeRoll, setShowInitiativeRoll] = useState(false);
  const [initiativeDice, setInicitaveDice] = useState(0);
  const [hp, setHp] = useState(Number(JSON.parse(localStorage.getItem("hp"))));

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
  const initiativeRoll = () => {
    console.log("click");
    setInicitaveDice(Math.floor(Math.random() * 20 + 1));
    setShowInitiativeRoll(!showInitiativeRoll);
  };
  const [showRests, setShowRests] = useState(false);
  const iniciativa = bonuses[1];
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
      {/* ODPOCINEK */}
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
      {/* jinou tridu a bude tady iniciativa ZB a Oč */}
      <Row className="profienci-div">
        <Col xs={3}>
          <p className="profienci-number">+4</p>
          <p className="profienci-text">zdatnostni bonus</p>
        </Col>
        <Col onClick={initiativeRoll} className="iniciativa">
          <p className="profienci-number">
            {iniciativa > 0 ? "+" + iniciativa : iniciativa}
          </p>
          <p className="profienci-text">iniciativa</p>
        </Col>
        <Col>
          <p className="profienci-number">6</p>
          <p className="profienci-text">
            Rychlost <br />
            (sahu)
          </p>
        </Col>
        <Col>
          <p className="profienci-number">16</p>
          <p className="profienci-text">Obranné cislo</p>
        </Col>
      </Row>
      {/* ATRIBUTY A BONUSY */}
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
      <ModalWin
        onToggle={showInitiativeRoll}
        initiativeDice={initiativeDice}
        initiativeBonus={iniciativa}
      />
    </div>
  );
};

export default Hero;
