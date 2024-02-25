import React from "react";
import "./Skills.css";
import { Col, Row, Container } from "reactstrap";
import { MdStarBorder, MdStar, MdOutlineStars } from "react-icons/md";
const data = [
  {
    section: true,
    heading: "Síla",
  },
  {
    name: "Atletika",
    proficiency: false,
    qualification: false,
  },
  {
    section: true,
    heading: "Obratnost",
  },
  {
    name: "Akrobacie",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Čachry",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Nenápadnost",
    proficiency: false,
    qualification: false,
  },
  {
    section: true,
    heading: "Inteligence",
  },
  {
    name: "Historie",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Mystika",
    proficiency: true,
    qualification: false,
  },
  {
    name: "Náboženství",
    proficiency: true,
    qualification: false,
  },
  {
    name: "Pátrání",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Příroda",
    proficiency: false,
    qualification: false,
  },
  {
    section: true,
    heading: "Moudrost",
  },
  {
    name: "Lékařství",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Ovládání zvířat",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Přežití",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Vhled",
    proficiency: true,
    qualification: false,
  },
  {
    name: "Vnímání",
    proficiency: false,
    qualification: false,
  },
  {
    section: true,
    heading: "Charisma",
  },
  {
    name: "Klamání",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Přesvědčování",
    proficiency: true,
    qualification: false,
  },
  {
    name: "Vystupování",
    proficiency: false,
    qualification: false,
  },
  {
    name: "Zastrašování",
    proficiency: false,
    qualification: false,
  },
];

const Skills = ({ handleSkills }) => {
  const icoSize = 30;
  const handleClick = (idcko, zdatnost, kvalifikace) => {
    handleSkills(idcko, zdatnost, kvalifikace);
  };
  return (
    <div className="skills">
      <Container className="no-interaction">
        {data.map((x) => (
          <>
            {x.section ? (
              <div key={x.heading}>
                <h2 className="text-center text-white pt-3">{x.heading}</h2>
                <hr className="text-white" />
              </div>
            ) : (
              <Row
                key={x.name}
                onClick={() =>
                  handleClick(x.name, x.proficiency, x.qualification)
                }
                className="lada"
              >
                {!x.qualification && (
                  <>
                    <Col xs={2}>
                      <p className="skill-icon">
                        {x.proficiency === true ? (
                          <MdStar size={icoSize} />
                        ) : (
                          <MdStarBorder size={icoSize} />
                        )}
                      </p>
                    </Col>
                    <Col xs={7}>
                      <p className="skill-text">{x.name}</p>
                    </Col>
                  </>
                )}
                {x.qualification && (
                  <>
                    <Col xs={2}>
                      <p className="skill-icon">
                        {x.qualification === true ? (
                          <MdOutlineStars size={icoSize} />
                        ) : (
                          <MdStarBorder size={icoSize} />
                        )}
                      </p>
                    </Col>
                    <Col xs={7}>
                      <p className="skill-text">{x.name}</p>
                    </Col>
                  </>
                )}
              </Row>
            )}
          </>
        ))}
      </Container>
    </div>
  );
};

export default Skills;
