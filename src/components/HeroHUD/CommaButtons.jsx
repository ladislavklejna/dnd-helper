import React, { useState, useEffect } from "react";
import { Button, Row, Col, Progress } from "reactstrap";
import { FaHeart } from "react-icons/fa";
import { IoSkullSharp } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import "./CommaButtons.css";
function CommaButtons() {
  // Stavové proměnné pro životy a smrti
  const [zivoty, setZivoty] = useState(0);
  const [smrt, setSmrt] = useState(0);
  const [liveIcon, setLiveIcon] = useState(null);

  // Funkce pro zvýšení počtu životů
  const zvysitZivoty = () => {
    if (zivoty < 3) {
      setZivoty(zivoty + 1);
    }
  };

  // Funkce pro zvýšení počtu smrtí
  const zvysitSmrt = () => {
    if (smrt < 3) {
      setSmrt(smrt + 1);
    }
  };

  useEffect(() => {
    if (smrt === 3) {
      setLiveIcon(false);
    }
    if (zivoty === 3) {
      setLiveIcon(true);
    }
  }, [smrt, zivoty]);

  return (
    <div className="mt-2">
      <h3 className="text-center mb-5">upadl jsi do bezvedomi</h3>

      <Row className="relative">
        <Col className="px-2">
          <Progress color="danger" max={3} value={smrt} />
          {smrt}
        </Col>
        <div
          className={`icon-background mt-2 ${liveIcon ? "back-green" : ""} ${
            liveIcon === false ? "back-red" : ""
          }`}
        >
          {liveIcon === null && (
            <FaQuestion className="comma-middle-icon" size={90} />
          )}
          {liveIcon === false && (
            <IoSkullSharp className="comma-middle-icon" size={90} />
          )}
          {liveIcon === true && (
            <FaHeart className="comma-middle-icon" size={90} />
          )}
        </div>
        <Col className="px-2">
          <Progress color="success" className="revert" max={3} value={zivoty} />
          {zivoty}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={zvysitSmrt}>
            <IoSkullSharp />
          </Button>
        </Col>
        <Col>
          <Button onClick={zvysitZivoty}>
            <FaHeart />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CommaButtons;
