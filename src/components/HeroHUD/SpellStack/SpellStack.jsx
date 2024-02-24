import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Table } from "reactstrap";
import { GiBrain } from "react-icons/gi";
import { GiSandsOfTime } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import "./SpellStack.css";
// import data from "./data";
import Markdown from "markdown-to-jsx";
import AddSpell from "./AddSpell";
import EditSpell from "./EditSpell";
// import EditSpell from "./EditSpell";
const SpellStack = () => {
  let localdata = JSON.parse(localStorage.getItem("spells"));
  if (!localdata) {
    localdata = [];
  }
  const [data, setData] = useState(localdata);
  const [show, setShow] = useState(false);
  const [showSpec, setShowSpec] = useState(false);
  const [spellSpecs, setSpellSpecs] = useState(false);
  const icoSize = 16;

  const handleMore = (idcko) => {
    let filter = data.filter((x) => x.id === idcko);
    setSpellSpecs(filter);
    setShowSpec(!showSpec);
  };
  const handleUpdate = (newSpell) => {
    let temp = localdata;
    temp.push(newSpell);
    localStorage.setItem("spells", JSON.stringify(temp));
    setData(localdata);
  };
  const handleEdit = (idcko) => {
    let temp = idcko;
    localStorage.setItem("spells", JSON.stringify(temp));
    setData(temp);
  };
  useEffect(() => {
    localdata = JSON.parse(localStorage.getItem("spells"));
    setShowSpec(!showSpec);
    setShowSpec(!showSpec);
  }, [data]);

  return (
    <div className="hi">
      <Button onClick={() => setShow(!show)} color="warning">
        Spell
      </Button>

      {show && (
        <Container className="spell-book">
          <div className="thead-sticky">
            <div className="relative">
              <h1 className="text-center">Kniha kouzel</h1>
              <Button
                className="spell-book-exit"
                onClick={() => setShow(!show)}
                color="warning"
              >
                X
              </Button>
              <AddSpell updateBook={handleUpdate} data={data} />
            </div>
            <Table className="table-padding" dark>
              <thead>
                <tr className="text-center">
                  <th className="cell-level">#</th>
                  <th className="cell-range">
                    <TbRulerMeasure size={icoSize} />
                  </th>
                  <th className="cell-duration">
                    <GiSandsOfTime size={icoSize} />
                  </th>
                  <th className="cell-action">AKCE</th>
                  <th className="cell-constitution">
                    <GiBrain size={icoSize} />
                  </th>
                  <th className="cell-save">ZH</th>
                </tr>
              </thead>
            </Table>
          </div>
          {data.map((spell) => (
            <div
              key={spell.id}
              onClick={() => handleMore(spell.id)}
              className="one-spell-short"
              id={spell.id}
            >
              <Row>
                <Col>
                  <h3 className="spell-name">{spell.name}</h3>
                </Col>
                <Col xs={3} className="text-right">
                  <h3>{spell.dmg}</h3>
                </Col>
              </Row>

              <Table>
                <tbody>
                  <tr className="text-center">
                    <td className="cell-level">{spell.level}</td>
                    <td className="cell-range">{spell.range}</td>
                    <td className="cell-duration">{spell.time}</td>
                    <td className="cell-action">{spell.action}</td>

                    <td className="relative cell-constitution">
                      {spell.focus === "true" ? (
                        <div className="yes"></div>
                      ) : (
                        <div className="no"></div>
                      )}
                    </td>
                    <td className="cell-save">{spell.save}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
        </Container>
      )}
      {showSpec && (
        <Container className="specials">
          <h2>Specifikace kouzla</h2>
          <Button onClick={handleMore}>Close</Button>
          {spellSpecs.map((xx) => (
            <div key={xx.id}>
              <h1>{xx.name}</h1>
              <Table>
                <thead>
                  <tr>
                    <th>lvl</th>
                    <th>dosah</th>
                    <th>trvani</th>
                    <th>
                      <GiBrain />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{xx.level}</td>
                    <td>{xx.range}</td>
                    <td>{xx.time}</td>
                    <td>{xx.focus === true ? "ANO" : "NE"}</td>
                  </tr>
                </tbody>
              </Table>
              {/* {xx.info.map((popis) => ( */}
              <div className="text-justify">
                <Markdown>{xx.info}</Markdown>
              </div>
              {/* ))} */}
              <EditSpell updateBook={handleEdit} data={data} idcko={xx.id} />
            </div>
          ))}
        </Container>
      )}
    </div>
  );
};

export default SpellStack;
