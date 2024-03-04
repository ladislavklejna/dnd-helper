import React, { useState, useEffect } from "react";
import { Input, Button, Col, Row, FormGroup, Label } from "reactstrap";
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
  useEffect(() => {
    const inputsOK =
      nick.trim().length >= 3 &&
      level.trim() !== "" &&
      parseInt(level) > 0 &&
      parseInt(level) < 21 &&
      live.trim() !== "" &&
      parseInt(live) > 0 &&
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
  }, [heroAtributs, level, nick, live]);
  return (
    <div className="make-hero">
      {/* <Race /> */}
      <Row>
        <Col xs={6} className="offset-3">
          <h1 className="text-center my-3 white">Tvorba postavy</h1>

          <Input
            type="number"
            name="level"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            placeholder="Úroveň"
            id="level"
            valid={level > 0 && level < 21}
            invalid={level !== "" ? level < 1 || level > 20 : ""}
          />

          <Input
            type="number"
            name="Síla"
            value={heroAtributs.Síla}
            min={1}
            max={20}
            onChange={handleOkData}
            placeholder="Síla"
            valid={heroAtributs.Síla > 0 && heroAtributs.Síla < 21}
            invalid={
              heroAtributs.Síla !== ""
                ? heroAtributs.Síla < 1 || heroAtributs.Síla > 20
                : ""
            }
          />
          <Input
            type="number"
            name="Obratnost"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Obratnost}
            placeholder="Obratnost"
            valid={heroAtributs.Obratnost > 0 && heroAtributs.Obratnost < 21}
            invalid={
              heroAtributs.Obratnost !== ""
                ? heroAtributs.Obratnost < 1 || heroAtributs.Obratnost > 20
                : ""
            }
          />
          <Input
            type="number"
            name="Odolnost"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Odolnost}
            placeholder="Odolnost"
            valid={heroAtributs.Odolnost > 0 && heroAtributs.Odolnost < 21}
            invalid={
              heroAtributs.Odolnost !== ""
                ? heroAtributs.Odolnost < 1 || heroAtributs.Odolnost > 20
                : ""
            }
          />
          <Input
            type="number"
            name="Inteligence"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Inteligence}
            placeholder="Inteligence"
            valid={
              heroAtributs.Inteligence > 0 && heroAtributs.Inteligence < 21
            }
            invalid={
              heroAtributs.Inteligence !== ""
                ? heroAtributs.Inteligence < 1 || heroAtributs.Inteligence > 20
                : ""
            }
          />
          <Input
            type="number"
            name="Moudrost"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Moudrost}
            placeholder="Moudrost"
            valid={heroAtributs.Moudrost > 0 && heroAtributs.Moudrost < 21}
            invalid={
              heroAtributs.Moudrost !== ""
                ? heroAtributs.Moudrost < 1 || heroAtributs.Moudrost > 20
                : ""
            }
          />
          <Input
            type="number"
            name="Charisma"
            min={1}
            max={20}
            onChange={handleOkData}
            value={heroAtributs.Charisma}
            placeholder="Charisma"
            valid={heroAtributs.Charisma > 0 && heroAtributs.Charisma < 21}
            invalid={
              heroAtributs.Charisma !== ""
                ? heroAtributs.Charisma < 1 || heroAtributs.Charisma > 20
                : ""
            }
          />
          <Input
            type="number"
            name="live"
            min={1}
            onChange={(e) => setLive(e.target.value)}
            value={live}
            placeholder="Max. životy"
            valid={live > 0}
            invalid={live !== "" ? live < 1 : ""}
          />
          <Input
            type="text"
            name="nick"
            onChange={(e) => setNick(e.target.value)}
            value={nick}
            placeholder="Jméno"
            valid={nick.length >= 3}
            invalid={nick !== "" ? nick.length < 3 : ""}
          />
          <Button
            className="mt-5"
            block
            onClick={accept}
            color={disabled === true ? "secondary" : "danger"}
            disabled={disabled}
          >
            Vytvořit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MakeHero;
