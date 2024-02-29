import React, { useState, useEffect } from "react";
import { Input, Button, Col, Row } from "reactstrap";
import "./MakeHero.css";
let bonuses = [];
const slots = [
  { lvl: 1, position: { A: "ok", B: "used", C: "ok", D: "ok" } },
  { lvl: 2, position: { A: "ok", B: "ok", C: "ok" } },
  { lvl: 3, position: { A: "ok", B: "used", C: "used" } },
  { lvl: 4, position: { A: "ok", B: "ok", C: "used" } },
  { lvl: 5, position: { A: "ok", B: "disabled", C: "disabled" } },
  { lvl: 6, position: { A: "disabled", B: "disabled" } },
  { lvl: 7, position: { A: "disabled", B: "disabled" } },
  { lvl: 8, position: { A: "disabled" } },
  { lvl: 9, position: { A: "disabled" } },
];
const MakeHero = ({ confirmed }) => {
  const [disabled, setDisabled] = useState(false);
  const [nick, setNick] = useState("");
  const [level, setLevel] = useState("");

  const [heroAtributs, setHeroAtributs] = useState({
    Síla: "",
    Obratnost: "",
    Odolnost: "",
    Inteligence: "",
    Moudrost: "",
    Charisma: "",
  });
  const [live, setLive] = useState("");
  const handleOkData = (e) => {
    setHeroAtributs({ ...heroAtributs, [e.target.name]: e.target.value });
  };
  const save = () => {
    localStorage.setItem("hero", JSON.stringify(heroAtributs));
    localStorage.setItem("bonus", JSON.stringify(bonuses));
    localStorage.setItem("name", JSON.stringify(nick));
    localStorage.setItem("hp", JSON.stringify(parseInt(live)));
    localStorage.setItem("level", JSON.stringify(parseInt(level)));
    localStorage.setItem("backpack", JSON.stringify(parseInt([])));
    localStorage.setItem("spells", JSON.stringify(parseInt([])));
    localStorage.setItem("slots", JSON.stringify(slots));
    if (localStorage.key !== "aktualHp") {
      localStorage.setItem("aktualHp", JSON.stringify(parseInt(live)));
    }
    let ac = 10 + bonuses[1];
    localStorage.setItem("ac", JSON.stringify(parseInt(ac)));
  };
  const accept = () => {
    for (let key in heroAtributs) {
      bonuses.push(Math.floor((heroAtributs[key] - 10) / 2));
    }
    save();
    confirmed(true);
  };
  console.log(heroAtributs);
  useEffect(() => {
    const inputsOK =
      heroAtributs.Síla.trim() !== "" &&
      parseInt(heroAtributs.Síla) > 0 &&
      parseInt(heroAtributs.Síla) < 21 &&
      heroAtributs.Obratnost.trim() !== "" &&
      parseInt(heroAtributs.Obratnost) > 0 &&
      parseInt(heroAtributs.Obratnost) < 21 &&
      heroAtributs.Odolnost.trim() !== "" &&
      parseInt(heroAtributs.Odolnost) > 0 &&
      parseInt(heroAtributs.Odolnost) < 21 &&
      heroAtributs.Inteligence.trim() !== "" &&
      parseInt(heroAtributs.Inteligence) > 0 &&
      parseInt(heroAtributs.Inteligence) < 21 &&
      heroAtributs.Moudrost.trim() !== "" &&
      parseInt(heroAtributs.Moudrost) > 0 &&
      parseInt(heroAtributs.Moudrost) < 21 &&
      heroAtributs.Charisma.trim() !== "" &&
      parseInt(heroAtributs.Charisma) > 0 &&
      parseInt(heroAtributs.Charisma) < 21;
    setDisabled(!inputsOK);
  }, [heroAtributs]);
  console.log(live);
  return (
    <div className="make-hero">
      <Row>
        <Col xs={6} className="offset-3">
          <Input
            type="number"
            name="level"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            placeholder="level"
          />
          <Input
            type="number"
            name="Síla"
            value={heroAtributs.Síla}
            min={1}
            max={20}
            onChange={handleOkData}
            placeholder="Síla"
          />
          <Input
            type="number"
            name="Obratnost"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Obratnost}
            placeholder="Obratnost"
          />
          <Input
            type="number"
            name="Odolnost"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Odolnost}
            placeholder="Odolnost"
          />
          <Input
            type="number"
            name="Inteligence"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Inteligence}
            placeholder="Inteligence"
          />
          <Input
            type="number"
            name="Moudrost"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Moudrost}
            placeholder="Moudrost"
          />
          <Input
            type="number"
            name="Charisma"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Charisma}
            placeholder="Charisma"
          />
          <Input
            type="number"
            name="live"
            min={1}
            onChange={(e) => setLive(e.target.value)}
            value={live}
            placeholder="Max. životy"
          />
          <Input
            type="text"
            name="nick"
            onChange={(e) => setNick(e.target.value)}
            value={nick}
            placeholder="Jméno"
          />
          <Button className="mt-5" block onClick={accept} disabled={disabled}>
            OK
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MakeHero;
