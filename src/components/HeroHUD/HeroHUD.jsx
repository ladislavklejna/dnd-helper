import React, { useState, useEffect } from "react";
import "./HeroHUD.css";
import { FaHeartPulse } from "react-icons/fa6";
import Inventory from "./Inventory";
import { Row, Col, Button, Input, Progress } from "reactstrap";
import ModalWin from "./ModalWin";
import CommaButtons from "./CommaButtons";
import ArmorNumber from "./ArmorNumber/ArmorNumber";
import SpellStack from "./SpellStack/SpellStack";
import Skills from "./Skills/Skills";
const Hero = () => {
  const [windowHpShow, setWindowHpShow] = useState(false);
  const [dmgOrHealValue, setDmgOrHealValue] = useState("");
  const [profienciBonus, setProfienciBonus] = useState(0);
  const data = Object.entries(JSON.parse(localStorage.getItem("hero")));
  const bonuses = JSON.parse(localStorage.getItem("bonus"));
  const name = JSON.parse(localStorage.getItem("name"));
  const level = JSON.parse(localStorage.getItem("level"));
  const maxHp = Number(JSON.parse(localStorage.getItem("hp")));
  const aktHp = Number(JSON.parse(localStorage.getItem("aktualHp")));
  const ac = Number(JSON.parse(localStorage.getItem("ac")));
  const [oc, setOc] = useState(ac);
  const [comma, setComma] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dice, setDice] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [title, setTitle] = useState("");
  const [hp, setHp] = useState(aktHp);
  const [showArmorNumber, setShowArmorNumber] = useState(false);
  const [profOrQuali, setProfOrQuali] = useState();
  const iniciativa = bonuses[1];

  const storeActualHP = (hpcka) => {
    localStorage.setItem("aktualHp", JSON.stringify(hpcka));
  };
  const hpWindow = () => {
    setWindowHpShow(!windowHpShow);
    storeActualHP(hp);
  };
  const heal = () => {
    if (hp + dmgOrHealValue >= maxHp) {
      setHp(maxHp);
    } else {
      setHp(hp + dmgOrHealValue);
    }

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
  const openModal = (btnID, proficiency, qualification) => {
    switch (btnID) {
      case "btn-initiative": {
        setDice(D20());
        setBonus(iniciativa);
        setShowModal(!showModal);
        setTitle("Iniciativa");
        setProfOrQuali(null);
        break;
      }
      case "Síla-check": {
        setDice(D20());
        setBonus(bonuses[0]);
        setShowModal(!showModal);
        setTitle("Ověření síly");
        setProfOrQuali(null);
        break;
      }
      case "Obratnost-check": {
        setDice(D20());
        setBonus(bonuses[1]);
        setShowModal(!showModal);
        setTitle("Ověření obratnosti");
        setProfOrQuali(null);
        break;
      }
      case "Odolnost-check": {
        setDice(D20());
        setBonus(bonuses[2]);
        setShowModal(!showModal);
        setTitle("Ověření odolnosti");
        setProfOrQuali(null);
        break;
      }
      case "Inteligence-check": {
        setDice(D20());
        setBonus(bonuses[3]);
        setShowModal(!showModal);
        setTitle("Ověření inteligence");
        setProfOrQuali(null);
        break;
      }
      case "Moudrost-check": {
        setDice(D20());
        setBonus(bonuses[4]);
        setShowModal(!showModal);
        setTitle("Ověření moudrosti");
        setProfOrQuali(null);
        break;
      }
      case "Charisma-check": {
        setDice(D20());
        setBonus(bonuses[5]);
        setShowModal(!showModal);
        setTitle("Ověření charisma");
        setProfOrQuali(null);
        break;
      }
      ////////////SKILLS\\\\\\\\\\\\\\\\\\\
      //síla
      case "Atletika": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[0]);
        setShowModal(!showModal);
        setTitle("Atletika");
        break;
      }
      //obratnost
      case "Akrobacie": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[1]);
        setShowModal(!showModal);
        setTitle("Akrobacie");
        break;
      }
      case "Čachry": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[1]);
        setShowModal(!showModal);
        setTitle("Čachry");
        break;
      }
      case "Nenápadnost": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[1]);
        setShowModal(!showModal);
        setTitle("Nenápadnost");
        break;
      }
      //inteligence
      case "Historie": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[3]);
        setShowModal(!showModal);
        setTitle("Historie");
        break;
      }
      case "Mystika": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[3]);
        setShowModal(!showModal);
        setTitle("Mystika");
        break;
      }
      case "Náboženství": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[3]);
        setShowModal(!showModal);
        setTitle("Náboženství");
        break;
      }
      case "Pátrání": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[3]);
        setShowModal(!showModal);
        setTitle("Pátrání");
        break;
      }
      case "Příroda": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[3]);
        setShowModal(!showModal);
        setTitle("Příroda");

        break;
      }
      //moudrost
      case "Lékařství": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[4]);
        setShowModal(!showModal);
        setTitle("Lékařství");

        break;
      }
      case "Ovládání zvířat": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[4]);
        setShowModal(!showModal);
        setTitle("Ovládání zvířat");

        break;
      }
      case "Přežití": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[4]);
        setShowModal(!showModal);
        setTitle("Přežití");

        break;
      }
      case "Vhled": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[4]);
        setShowModal(!showModal);
        setTitle("Vhled");

        break;
      }
      case "Vnímání": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[4]);
        setShowModal(!showModal);
        setTitle("Vnímání");

        break;
      }
      //charisma
      case "Klamání": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[5]);
        setShowModal(!showModal);
        setTitle("Klamání");

        break;
      }
      case "Přesvědčování": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[5]);
        setShowModal(!showModal);
        setTitle("Přesvědčování");

        break;
      }
      case "Vystupování": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[5]);
        setShowModal(!showModal);
        setTitle("Vystupování");
        break;
      }
      case "Zastrašování": {
        setDice(D20());
        if (proficiency === true) {
          setProfOrQuali(profienciBonus);
        } else if (qualification === true) {
          setProfOrQuali(profienciBonus * 2);
        } else {
          setProfOrQuali(null);
        }
        setBonus(bonuses[5]);
        setShowModal(!showModal);
        setTitle("Zastrašování");

        break;
      }
      default:
        break;
    }
  };
  const [showRests, setShowRests] = useState(false);

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
  const armorNumber = () => {
    setShowArmorNumber(!showArmorNumber);
  };
  const onAct = (id) => {
    setOc(id);
  };
  return (
    <div className="pt-3 no-interaction">
      <Row className="text-center mb-3">
        <Col>
          <Button className="mb-3" onClick={() => setShowRests(true)}>
            Odpocinek
          </Button>
          <Inventory />
          <SpellStack />
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
        <Col onClick={armorNumber}>
          <p className="profienci-number">{oc}</p>
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
        profienciBonus={profOrQuali}
      />

      <ArmorNumber
        onToggle={showArmorNumber}
        dexBonus={bonuses[1]}
        onAct={onAct}
      />
      <Skills handleSkills={openModal} />
    </div>
  );
};

export default Hero;
