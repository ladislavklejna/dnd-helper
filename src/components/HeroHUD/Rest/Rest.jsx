import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button } from "reactstrap";
import "./Rest.css";

const Rest = ({
  level,
  hideRest,
  rest,
  overlay,
  shortDices,
  handleOverLay,
}) => {
  const [active, setActive] = useState(true);
  const [disable, setDisable] = useState(true);
  const [value, setValue] = useState(0);
  const [celkem, setCelkem] = useState(0);
  const handleChange = (e) => {
    if (e.target.id === "long") {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  const handleInput = (e) => {
    let value = e.target.value;
    if (value.trim() !== "" && value <= level) {
      setValue(parseInt(e.target.value));
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const save = (e) => {
    if (e.target.id == "short") {
      rest(value);
    } else rest(111);
  };
  const sumNumbers = (numbers) => {
    // Sečtení prvků pole
    const sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    setCelkem(sum);
  };
  useEffect(() => {
    sumNumbers(shortDices);
  }, [overlay]);
  return (
    <div className="relative">
      {overlay && (
        <div className="overlay">
          {celkem !== 0 ? (
            <>
              <h1 className="text-center mt-5">{shortDices.join(" + ")}</h1>
              <h1 className="text-center mt-2">=</h1>
              <h1 className="text-center mt-2">Zdraví doplněno o {celkem}</h1>
            </>
          ) : (
            <>
              <h1 className="text-center mt-2">Zdraví doplněno do maxima</h1>
              <h1 className="text-center mt-2">Pozice kouzel doplněny</h1>
            </>
          )}
          <Button onClick={handleOverLay} className="overlay-btn">
            OK
          </Button>
        </div>
      )}
      <Row className="rest mb-3">
        <Col
          className={`px-1 mx-2 one-rest ${
            active === true ? "active-rest" : ""
          }`}
        >
          <h2 className="text-center">Krátký</h2>
          <p>kostka obnovy k6</p>
          <p>k dispozici {level} kostek</p>
          <Input type="number" onChange={handleInput} />
          <br />
          <Input
            className="rest-radio"
            type="radio"
            name="radio"
            id="short"
            min={1}
            max={level}
            defaultChecked
            onChange={handleChange}
          />
        </Col>
        <Col
          className={`px-1 mx-2 one-rest ${
            active === true ? "" : "active-rest"
          }`}
        >
          <h2 className="text-center">Dlouhý</h2>
          <p>životy na max</p>
          <p>kouzla na max</p>
          <p>nutné spát 8h</p>
          <br />
          <Input
            id="long"
            className="rest-radio"
            type="radio"
            name="radio"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row className="rest-btn">
        <Button
          id={active === true ? "short" : "long"}
          color="danger"
          onClick={save}
          disabled={disable && active}
          block
        >
          Potvrdit
        </Button>
      </Row>
      <Row className="rest-btn">
        <Button onClick={hideRest} block>
          Zrušit
        </Button>
      </Row>
    </div>
  );
};

export default Rest;
