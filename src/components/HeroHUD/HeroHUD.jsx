import React, { useState, useEffect } from "react";
import "./HeroHUD.css";
import { FaHeartPulse } from "react-icons/fa6";

import { Row, Col, Button, Input, Progress } from "reactstrap";
import ModalWin from "./ModalWin";
import CommaButtons from "./CommaButtons";
const Hero = () => {
  const [windowHpShow, setWindowHpShow] = useState(false);
  const [dmgOrHealValue, setDmgOrHealValue] = useState("");
  const [profienciBonus, setProfienciBonus] = useState(0);
  const data = Object.entries(JSON.parse(localStorage.getItem("hero")));
  const bonuses = JSON.parse(localStorage.getItem("bonus"));
  const name = JSON.parse(localStorage.getItem("name"));
  const level = JSON.parse(localStorage.getItem("level"));
  const maxHp = Number(JSON.parse(localStorage.getItem("hp")));
  const [comma, setComma] = useState(false);
  const [showInitiativeRoll, setShowInitiativeRoll] = useState(false);
  const [initiativeDice, setInicitaveDice] = useState(0);
  const [hp, setHp] = useState(Number(JSON.parse(localStorage.getItem("hp"))));
  const hpWindow = () => {
    setWindowHpShow(!windowHpShow);
  };
  const heal = () => {
    if (hp + dmgOrHealValue >= maxHp) {
      setHp(maxHp);
    } else {
      setHp(hp + dmgOrHealValue);
    }
    setTimeout(() => {
      setWindowHpShow(!windowHpShow);
    }, 2000);
    setDmgOrHealValue("");
    if (hp + dmgOrHealValue > 0) {
      setComma(false);
      console.log("commacheck");
    }
  };
  const damage = () => {
    if (hp - dmgOrHealValue <= 0) {
      setHp(0);
      setComma(true);
    } else {
      setHp(hp - dmgOrHealValue);
    }
    setDmgOrHealValue("");

    // setWindowHpShow(!windowHpShow);
  };

  const initiativeRoll = () => {
    console.log("click");
    setInicitaveDice(Math.floor(Math.random() * 20 + 1));
    setShowInitiativeRoll(!showInitiativeRoll);
  };
  const [showRests, setShowRests] = useState(false);
  const iniciativa = bonuses[1];
  useEffect(() => {
    if (level <= 4) {
      setProfienciBonus(2);
    } else if (level <= 4) {
      setProfienciBonus(2);
    } else if (level <= 8) {
      setProfienciBonus(3);
    } else if (level <= 12) {
      setProfienciBonus(4);
    } else if (level <= 16) {
      setProfienciBonus(5);
    } else {
      setProfienciBonus(6);
    }
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <Button onClick={() => setShowRests(true)}>Odpocinek</Button>
        </Col>
        <Col>{name}</Col>
        <Col className="hp">
          <Button onClick={hpWindow}>
            {hp} / {maxHp}
          </Button>
          {/* HP  WINDOW */}
          {windowHpShow && (
            <Row>
              <div className="slide-in-right pt-3">
                <Button onClick={hpWindow}>&lt; Zpet</Button>
                <Row className="offset-healOrDamage text-center">
                  <Col>
                    <Button name="damage" color="danger" onClick={damage}>
                      Zraneni
                    </Button>
                  </Col>
                  <Col>
                    <FaHeartPulse size={60} />
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
                    <p className="hp-under-icon text-center">{hp}</p>
                    <Progress
                      className="my-2"
                      min={0}
                      max={maxHp}
                      value={hp}
                      color="danger"
                      animated
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className="offset-3">
                    <Input
                      className="text-center mb-3"
                      min={0}
                      type="number"
                      placeholder="hodnota"
                      onChange={(e) =>
                        setDmgOrHealValue(Number(e.target.value))
                      }
                      value={dmgOrHealValue}
                    />
                  </Col>
                </Row>

                {/* COMMA */}
                {comma && (
                  <Row className="comma">
                    <h3>upadl jsi do bezvedomi</h3>
                    <CommaButtons />
                  </Row>
                )}
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
          <p className="profienci-number">{profienciBonus}</p>
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
