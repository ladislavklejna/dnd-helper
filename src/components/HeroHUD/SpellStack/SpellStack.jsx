import React, { useState } from "react";
import { Button, Container, Row, Col, Table } from "reactstrap";
import { GiBrain } from "react-icons/gi";
import "./SpellStack.css";
import data from "./data";
const SpellStack = () => {
  const [show, setShow] = useState(true);
  const [showSpec, setShowSpec] = useState(false);
  const [spellSpecs, setSpellSpecs] = useState(false);

  const handleMore = (idcko) => {
    let filter = data.filter((x) => x.id === idcko);
    setSpellSpecs(filter);
    setShowSpec(!showSpec);
  };
  return (
    <div className="hi">
      <Button onClick={() => setShow(!show)} color="warning">
        Spell
      </Button>
      {show && (
        <Container className="spell-book">
          <div>
            <h1>ahoj</h1>
            <Button onClick={() => setShow(!show)} color="warning">
              X
            </Button>
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
                  <h3>{spell.name}</h3>
                </Col>
                <Col xs={3} className="text-right">
                  <h3>{spell.dmg}</h3>
                </Col>
              </Row>

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
                    <td>{spell.level}</td>
                    <td>{spell.range}</td>
                    <td>{spell.time}</td>
                    <td>{spell.focus === true ? "ANO" : "NE"}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
        </Container>
      )}
      {showSpec && (
        <Container className="specials">
          <h2>Specialls</h2>
          <Button onClick={handleMore}>Close</Button>
          {spellSpecs.map((xx) => (
            <div>
              <h1>{xx.name}</h1>
              <p>{xx.info}</p>
            </div>
          ))}
        </Container>
      )}
    </div>
  );
};

export default SpellStack;
