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
  const [showModal, setShowModal] = useState(false);
  const [dice, setDice] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [title, setTitle] = useState("");
  const [hp, setHp] = useState(Number(JSON.parse(localStorage.getItem("hp"))));
  const iniciativa = bonuses[1];

  const hpWindow = () => {
    setWindowHpShow(!windowHpShow);
  };
  const heal = () => {
    if (hp + dmgOrHealValue >= maxHp) {
      setHp(maxHp);
    } else {
      setHp(hp + dmgOrHealValue);
    }
    // setTimeout(() => {
    //   setWindowHpShow(!windowHpShow);
    // }, 2000);
    setDmgOrHealValue("");
    if (hp + dmgOrHealValue > 0) {
      setComma(false);
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
  };
  const D20 = () => {
    return Math.floor(Math.random() * 20 + 1);
  };
  const openModal = (btnID) => {
    switch (btnID) {
      case "btn-initiative": {
        setDice(D20());
        setBonus(iniciativa);
        setShowModal(!showModal);
        setTitle("Iniciativa");
        break;
      }
      case "Síla-check": {
        setDice(D20());
        setBonus(bonuses[0]);
        setShowModal(!showModal);
        setTitle("Ověření síly");
        break;
      }
      case "Obratnost-check": {
        setDice(D20());
        setBonus(bonuses[1]);
        setShowModal(!showModal);
        setTitle("Ověření obratnosti");
        break;
      }
      case "Odolnost-check": {
        setDice(D20());
        setBonus(bonuses[2]);
        setShowModal(!showModal);
        setTitle("Ověření odolnosti");
        break;
      }
      case "Inteligence-check": {
        setDice(D20());
        setBonus(bonuses[3]);
        setShowModal(!showModal);
        setTitle("Ověření inteligence");
        break;
      }
      case "Moudrost-check": {
        setDice(D20());
        setBonus(bonuses[4]);
        setShowModal(!showModal);
        setTitle("Ověření moudrosti");
        break;
      }
      case "Charisma-check": {
        setDice(D20());
        setBonus(bonuses[5]);
        setShowModal(!showModal);
        setTitle("Ověření charisma");
        break;
      }
      default:
        break;
    }
  };
  const [showRests, setShowRests] = useState(false);

  console.log(dmgOrHealValue);
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
    <div className="pt-3">
      <Row className="text-center mb-3">
        <Col>
          <Button onClick={() => setShowRests(true)}>Odpocinek</Button>
        </Col>
        <Col>
          <img className="avatar" src="foto.png" />
          <br />
          {name}
        </Col>
        <Col className="hp">
          <Button block onClick={hpWindow}>
            {hp} / {maxHp}
            <br />
            Zdraví
          </Button>
        </Col>
      </Row>
      {/* HP  WINDOW */}
      {windowHpShow && (
        <Row>
          <div className="slide-in-right pt-3">
            <Button onClick={hpWindow}>&lt; Zpet</Button>
            <Row className="offset-healOrDamage text-center">
              <Col>
                <Button
                  disabled={
                    parseInt(dmgOrHealValue) < 0 || dmgOrHealValue === ""
                  }
                  name="damage"
                  color="danger"
                  onClick={damage}
                >
                  Zranění
                </Button>
                {/* <MyButton
                      id={"damage"}
                      color={"danger"}
                      label={"Zranění"}
                      buttonHandler={handleButton}
                    /> */}
              </Col>
              <Col>
                <FaHeartPulse size={60} />
              </Col>
              <Col>
                <Button
                  disabled={
                    parseInt(dmgOrHealValue) < 0 || dmgOrHealValue === ""
                  }
                  name="heal"
                  className="heal"
                  color="success"
                  onClick={heal}
                >
                  Léčení
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="offset-3">
                <p className="hp-under-icon text-center">
                  {hp} / {maxHp}
                </p>
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
              <Col xs={6} className="damage-or-heal offset-3">
                <Input
                  className="text-center mb-3"
                  min={0}
                  type="number"
                  placeholder="hodnota"
                  onChange={(e) => setDmgOrHealValue(e.target.value)}
                  value={dmgOrHealValue}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={3} className="offset-3">
                <Button
                  disabled={dmgOrHealValue <= 0}
                  onClick={() => setDmgOrHealValue(dmgOrHealValue - 1)}
                  block
                >
                  -
                </Button>
              </Col>
              <Col xs={3}>
                <Button
                  onClick={() => setDmgOrHealValue(Number(dmgOrHealValue) + 1)}
                  block
                >
                  +
                </Button>
              </Col>
            </Row>

            {/* COMMA */}
            {comma && (
              <Row className="comma">
                <CommaButtons />
              </Row>
            )}
          </div>
        </Row>
      )}
      {/* HP  WINDOW  OUT*/}

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
        <Col
          id="btn-initiative"
          onClick={() => openModal("btn-initiative")}
          className="iniciativa"
        >
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
          <Col key={index} xs={4} className="mt-4">
            <div className="atributy">
              <p className="text-center name-atribut">{xx[0]}</p>
              <p className="number-atribut">{xx[1]}</p>
              <div
                id={xx[0] + "-check"}
                onClick={() => openModal(xx[0] + "-check")}
                className="atributy-bonus"
              >
                <p className="text-center number-bonus">
                  {bonuses[index] > 0 ? "+" + bonuses[index] : bonuses[index]}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <ModalWin
        onToggle={showModal}
        diceValue={dice}
        bonusValue={bonus}
        title={title}
      />
    </div>
  );
};

export default Hero;
