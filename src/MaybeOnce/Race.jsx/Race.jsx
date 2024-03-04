import React, { useState, useEffect } from "react";
import "./Race.css";
import { Input, Table } from "reactstrap";

const data = [
  {
    id: "clovek",
    raceInfo:
      "jsou prostě Lidé, byť jim mnohé světy dávají určitou stylizaci (hrdinskost, společen-skost, všestrannost atp.). V JaD jde o velmi uni-verzální Rasu, která se dobře uplatní v kombinaci s každým Povoláním. Hraj Člověka, pokud chceš hrát klasického hrdinu, sympatického zlotřilce nebo cokoliv jiného.",
    haveSub: false,
  },
  {
    id: "elf",
    raceInfo:
      "jsou prostě trpos V JaD jde o velmi uni-verzální Rasu, která se dobře uplatní v kombinaci s každým Povoláním. Hraj Člověka, pokud chceš hrát klasického hrdinu, sympatického zlotřilce nebo cokoliv jiného.",
    haveSub: true,
    subChoice: [
      {
        id: "Divoký",
        info: "Divocí elfové jsou archetypem Elfů spjatých s přírodou – ať už jde o hluboké hvozdy, divoká pobřeží, mokřady, či skalnatá údolí. Bývají intuitivní a často vedení okamžitými dojmy, což je mnohdy činí nepředvídatelné.",
      },
      {
        id: "Vznešený",
        info: "Vznešení elfové jsou mistry magie a řemesel proslavenými svými znalostmi, stejně jako svým uměním.Obývají mramorová města, vznosné přístavy nebo horské citadely. Jejich velikost mnohdy provází pověst povýšenosti.",
      },
      {
        id: "Noční",
        info: "Noční elfové jsou tajuplný Rod oddaný hlubší mystice světa a tajemným proroctvím. Jejich znameními vedené činy jsou často obtížně pochopitelné, přesto však nějakým mystickým způsobem naplňují jejich cíle.",
      },
    ],
  },
  {
    id: "trpaslik",
    raceInfo:
      "jsou prostě trpos V JaD jde o velmi uni-verzální Rasu, která se dobře uplatní v kombinaci s každým Povoláním. Hraj Člověka, pokud chceš hrát klasického hrdinu, sympatického zlotřilce nebo cokoliv jiného.",
    haveSub: true,
    subChoice: ["ohen", "voda", "zeme"],
  },

  {
    id: "tiefling",
    raceInfo:
      "jsou prostě trpos V JaD jde o velmi uni-verzální Rasu, která se dobře uplatní v kombinaci s každým Povoláním. Hraj Člověka, pokud chceš hrát klasického hrdinu, sympatického zlotřilce nebo cokoliv jiného.",
    haveSub: false,
  },
];

const background = [
  {
    id: 1,
    name: "bandita",
    info: "uplatní v kombinaci s každým Povoláním. Hraj Člověka, pokud chceš hrát klasického hrdinu, sympatického zlotřilce nebo cokoliv jiného.",
  },
  {
    id: 2,
    name: "Bylinkář",
    info: "uplatní v kombinaci s každým Povoláním. át klasického hrdinu, sympatického zlotřilce nebo cokoliv jiného.",
  },
];
const Race = () => {
  const [raceInfo, setRaceInfo] = useState();
  const [subRace, setSubRace] = useState();
  const [haveSubRace, setHaveSubRace] = useState();
  const [back, setBack] = useState();
  const [hero, setHero] = useState({
    race: "clovek",
    sub: "",
    back: "bandita",
    profession: "",
  });
  const handleRace = (e) => {
    setHero({ ...hero, race: e.target.value });
  };
  const handleSubRace = (e) => {
    setHero({ ...hero, sub: e.target.value });
  };
  const handleBackground = (e) => {
    setHero({ ...hero, back: e.target.value });
  };
  useEffect(() => {
    const index = data.findIndex((data) => data.id == hero.race);

    setRaceInfo(data[index].raceInfo);
    if (data[index].haveSub === true) {
      setHaveSubRace(true);
    } else {
      setHaveSubRace(false);
    }
    // const subIndex = data[index].subChoice.findIndex(
    //   (sub) => sub.id == hero.back
    // );
    // console.log(subIndex);
    setSubRace(data[index].subChoice);
    const backInd = background.findIndex((bck) => bck.name == hero.back);
    setBack(background[backInd].info);
  }, [hero.race, hero.sub, hero.back]);
  console.log(hero);
  return (
    <div className="race">
      <Table>
        <thead>
          <th></th>
          <th></th>
          <th></th>
        </thead>
      </Table>
      <h1>Rasa</h1>
      <Input type="select" onChange={handleRace}>
        <option value="clovek">clovek</option>
        <option value="trpaslik">trpaslik</option>
        <option value="elf">elf</option>
        <option value="tiefling">tiefling</option>
      </Input>
      {raceInfo && <p>{raceInfo}</p>}

      <h1>SubRasa</h1>

      {haveSubRace === true ? (
        <>
          <Input type="select" onChange={handleSubRace}>
            <option></option>
            {subRace.map((x) => (
              <option value={x.id}>{x.id}</option>
            ))}
          </Input>
        </>
      ) : (
        <>
          <h3>Tato rasa nemá sub rasu</h3>
        </>
      )}
      {haveSubRace === true ? (
        <>
          {subRace
            .filter((x) => x.id == hero.sub)
            .map((filteredItem) => (
              <h3 key={filteredItem.id}>{filteredItem.info}</h3>
            ))}
        </>
      ) : (
        <></>
      )}

      <h1>Zázemí</h1>
      <Input type="select" onChange={handleBackground}>
        {background.map((back) => (
          <option key={back.id} value={back.name}>
            {back.name}
          </option>
        ))}
      </Input>
      {back}
    </div>
  );
};

export default Race;
