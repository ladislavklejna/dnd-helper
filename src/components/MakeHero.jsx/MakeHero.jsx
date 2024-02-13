import React, { useState, useEffect } from "react";
import { Input, Button } from "reactstrap";
import "./MakeHero.css";
let bonuses = [];
const MakeHero = ({ confirmed }) => {
  const [disabled, setDisabled] = useState(false);
  const [nick, setNick] = useState("");
  const [level, setLevel] = useState(1);

  const [heroAtributs, setHeroAtributs] = useState({
    Síla: "20",
    Obratnost: "15",
    Odolnost: "8",
    Inteligence: "8",
    Moudrost: "16",
    Charisma: "15",
  });
  const [live, setLive] = useState(0);
  const handleOkData = (e) => {
    setHeroAtributs({ ...heroAtributs, [e.target.name]: e.target.value });
  };
  const save = () => {
    localStorage.setItem("hero", JSON.stringify(heroAtributs));
    localStorage.setItem("bonus", JSON.stringify(bonuses));
    localStorage.setItem("name", JSON.stringify(nick));
    localStorage.setItem("hp", JSON.stringify(live));
    localStorage.setItem("level", JSON.stringify(level));
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
    <div>
      <Input
        type="number"
        name="level"
        onChange={(e) => setLevel(e.target.value)}
        value={level}
      />
      <Input
        type="number"
        name="Síla"
        value={heroAtributs.Síla}
        min={1}
        max={20}
        onChange={handleOkData}
      />
      <Input
        type="number"
        name="Obratnost"
        min={1}
        max={20}
        onChange={handleOkData}
        value={heroAtributs.Obratnost}
      />
      <Input
        type="number"
        name="Odolnost"
        min={1}
        max={20}
        onChange={handleOkData}
        value={heroAtributs.Odolnost}
      />
      <Input
        type="number"
        name="Inteligence"
        min={1}
        max={20}
        onChange={handleOkData}
        value={heroAtributs.Inteligence}
      />
      <Input
        type="number"
        name="Moudrost"
        min={1}
        max={20}
        onChange={handleOkData}
        value={heroAtributs.Moudrost}
      />
      <Input
        type="number"
        name="Charisma"
        min={1}
        max={20}
        onChange={handleOkData}
        value={heroAtributs.Charisma}
      />
      <Input
        type="number"
        name="live"
        min={1}
        onChange={(e) => setLive(e.target.value)}
        value={live}
      />
      <Input
        type="text"
        name="nick"
        onChange={(e) => setNick(e.target.value)}
        value={nick}
      />
      <Button onClick={accept} disabled={disabled}>
        OK
      </Button>
    </div>
  );
};

export default MakeHero;
