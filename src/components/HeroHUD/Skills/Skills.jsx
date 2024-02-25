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
    index: 0,
  },
  {
    section: true,
    heading: "Obratnost",
  },
  {
    name: "Akrobacie",
    proficiency: false,
    qualification: false,
    index: 1,
  },
  {
    name: "Čachry",
    proficiency: false,
    qualification: false,
    index: 1,
  },
  {
    name: "Nenápadnost",
    proficiency: false,
    qualification: false,
    index: 1,
  },
  {
    section: true,
    heading: "Inteligence",
  },
  {
    name: "Historie",
    proficiency: false,
    qualification: false,
    index: 3,
  },
  {
    name: "Mystika",
    proficiency: true,
    qualification: false,
    index: 3,
  },
  {
    name: "Náboženství",
    proficiency: true,
    qualification: false,
    index: 3,
  },
  {
    name: "Pátrání",
    proficiency: false,
    qualification: false,
    index: 3,
  },
  {
    name: "Příroda",
    proficiency: false,
    qualification: false,
    index: 3,
  },
  {
    section: true,
    heading: "Moudrost",
  },
  {
    name: "Lékařství",
    proficiency: false,
    qualification: false,
    index: 4,
  },
  {
    name: "Ovládání zvířat",
    proficiency: false,
    qualification: false,
    index: 4,
  },
  {
    name: "Přežití",
    proficiency: false,
    qualification: false,
    index: 4,
  },
  {
    name: "Vhled",
    proficiency: true,
    qualification: false,
    index: 4,
  },
  {
    name: "Vnímání",
    proficiency: false,
    qualification: false,
    index: 4,
  },
  {
    section: true,
    heading: "Charisma",
  },
  {
    name: "Klamání",
    proficiency: false,
    qualification: false,
    index: 5,
  },
  {
    name: "Přesvědčování",
    proficiency: true,
    qualification: false,
    index: 5,
  },
  {
    name: "Vystupování",
    proficiency: false,
    qualification: false,
    index: 5,
  },
  {
    name: "Zastrašování",
    proficiency: false,
    qualification: false,
    index: 5,
  },
];

const Skills = ({ handleSkills, bonuses, proficiencyBonus }) => {
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
                {x.proficiency === true ? (
                  <Col className="skill-number" xs={1}>
                    {bonuses[x.index] + proficiencyBonus}
                  </Col>
                ) : (
                  <Col className="skill-number" xs={1}>
                    {bonuses[x.index]}
                  </Col>
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
