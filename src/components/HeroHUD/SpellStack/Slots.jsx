import React from "react";
import { useState, useEffect } from "react";
import { Button, Input, Table } from "reactstrap";
import "./Slots.css";
// const data = [
//   [1, 1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1],
//   [1, 1],
//   [1],
//   [1],
// ];
const data = [
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
const Slots = () => {
  const temp = JSON.parse(localStorage.getItem("slots"));
  const [dta, setDta] = useState(temp);
  //   const handleClick = (id, slot) => {
  //     let index = data.findIndex((levl) => levl.lvl == id);
  //     let editObject = data[index];
  //     console.log(editObject);
  //     if (editObject.position[slot] === "used") {
  //       setDta(...dta, (editObject.position[slot] = "ok"));
  //       console.log(editObject.position[slot]);
  //     }
  //   };
  const handleClick = (id, slot) => {
    // Najděte index položky s odpovídajícím id
    const index = dta.findIndex((item) => item.lvl === id);

    // Pokud index není nalezen, ukončíme funkci
    if (index === -1) {
      return;
    }

    // Vytvoříme kopii objektu, na kterém budeme provádět změny
    const updatedData = [...dta];

    // Získáme aktuální stav položky
    const item = updatedData[index];

    // Vytvoříme kopii stavu slotu pro úpravy
    const updatedPosition = { ...item.position };

    // Aktualizujeme stav slotu podle toho, zda je "used" nebo "ok"
    updatedPosition[slot] = updatedPosition[slot] === "used" ? "ok" : "used";

    // Aktualizujeme stav položky s novými údaji slotu
    const updatedItem = { ...item, position: updatedPosition };

    // Aktualizujeme pole s daty na základě indexu
    updatedData[index] = updatedItem;

    // Aktualizujeme stav pomocí setDta
    setDta(updatedData);
  };

  useEffect(() => {
    localStorage.setItem("slots", JSON.stringify(dta));
  }, [dta]);

  return (
    <div className="slots">
      <Table>
        <thead>
          <tr>
            {dta.map((item, index) => (
              <th key={index}>{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dta.map((item) => (
              <td
                className={item.position.A == null ? "invisible-cell" : ""}
                key={item.lvl}
                id={item.lvl + "A"}
              >
                <div
                  className={`one-slot ${
                    item.position.A === "used"
                      ? "used"
                      : item.position.A === "disabled"
                      ? "disabled"
                      : "active"
                  }`}
                  onClick={() => handleClick(item.lvl, "A")}
                ></div>
              </td>
            ))}
          </tr>
          <tr>
            {dta.map((item) => (
              <td
                className={item.position.B == null ? "invisible-cell" : ""}
                key={item.lvl}
                id={item.lvl + "B"}
              >
                <div
                  className={`one-slot ${
                    item.position.B === "used"
                      ? "used"
                      : item.position.B === "disabled"
                      ? "disabled"
                      : "active"
                  }`}
                  onClick={() => handleClick(item.lvl, "B")}
                ></div>
              </td>
            ))}
          </tr>
          <tr>
            {dta.map((item) => (
              <td
                className={item.position.C == null ? "invisible-cell" : ""}
                key={item.lvl}
                id={item.lvl + "C"}
              >
                <div
                  className={`one-slot ${
                    item.position.C === "used"
                      ? "used"
                      : item.position.C === "disabled"
                      ? "disabled"
                      : "active"
                  }`}
                  onClick={() => handleClick(item.lvl, "C")}
                ></div>
              </td>
            ))}
          </tr>
          <tr>
            {dta.map((item) => (
              <td
                className={item.position.D == null ? "invisible-cell" : ""}
                key={item.lvl}
                id={item.lvl + "D"}
              >
                <div
                  className={`one-slot ${
                    item.position.D === "used"
                      ? "used"
                      : item.position.D === "disabled"
                      ? "disabled"
                      : "active"
                  }`}
                  onClick={() => handleClick(item.lvl, "D")}
                ></div>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Slots;
