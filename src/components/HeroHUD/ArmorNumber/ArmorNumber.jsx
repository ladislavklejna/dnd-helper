import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Row,
  Col,
  Table,
} from "reactstrap";
import "./ArmorNumber.css";

function ArmorNumber({ onToggle, dexBonus, onAct }) {
  const [modal, setModal] = useState(true);
  const [mage, setMage] = useState(false);

  const [acModifiers, setAcModifiers] = useState(
    JSON.parse(localStorage.getItem("armorClass")) || []
  );
  const [newModifier, setNewModifier] = useState({ nazev: "", hodnota: "" });
  let ac = 0;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewModifier((prevModifier) => ({
      ...prevModifier,
      [name]: value,
    }));
  };

  useEffect(() => {
    toggle();
  }, [onToggle]);

  const save = () => {
    const updatedModifiers = [...acModifiers, newModifier];
    setAcModifiers(updatedModifiers);
    localStorage.setItem("armorClass", JSON.stringify(updatedModifiers));
    setNewModifier({ nazev: "", hodnota: "" });
  };

  const handleActive = (index) => {
    const updatedModifiers = [...acModifiers];
    updatedModifiers[index].check = !updatedModifiers[index].check;
    setAcModifiers(updatedModifiers);
    localStorage.setItem("armorClass", JSON.stringify(updatedModifiers));
  };

  useEffect(() => {
    let totalModifier = 0;
    acModifiers.forEach((modifier) => {
      if (!modifier.check) {
        totalModifier += parseInt(modifier.hodnota) || 0;
      }
    });
    setTotalModifier(totalModifier);
  }, [acModifiers]);

  const [totalModifier, setTotalModifier] = useState(0);

  const deleteItem = (index) => {
    const updatedModifiers = [...acModifiers];
    updatedModifiers.splice(index, 1);
    setAcModifiers(updatedModifiers);
    localStorage.setItem("armorClass", JSON.stringify(updatedModifiers));
  };
  const handleMageArmor = () => {
    setMage(!mage);
  };
  const toggle = () => {
    setModal(!modal);
    let magearm;
    if (mage === true) {
      magearm = 13;
    } else {
      magearm = 10;
    }
    if (totalModifier > 0 || acModifiers.length === 0) {
      ac = magearm + dexBonus + totalModifier;
      localStorage.setItem("ac", JSON.stringify(ac));
      onAct(ac);
    } else {
      ac = Number(JSON.parse(localStorage.getItem("ac")));
      onAct(ac);
    }
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Obranné číslo</ModalHeader>
        <ModalBody>
          <Table>
            <tbody>
              <tr>
                <td></td>
                <td>Základní AC</td>
                <td className="txt-right">{mage ? 13 : 10}</td>
              </tr>
              <tr>
                <td></td>
                <td>Obratnostní bonus</td>
                <td className="txt-right">{dexBonus}</td>
              </tr>
              {acModifiers.map((item, index) => (
                <tr
                  key={index}
                  className={!item.check === true ? "" : "line-thru"}
                >
                  <td>
                    <Input
                      type="checkbox"
                      checked={!item.check}
                      onChange={() => handleActive(index)}
                    />
                  </td>
                  <td>{item.nazev}</td>
                  <td className="txt-right">{item.hodnota}</td>
                  <td>
                    <Button onClick={() => deleteItem(index)} color="danger">
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button
            color={mage ? "success" : "secondary"}
            onClick={handleMageArmor}
          >
            Mágova zbroj
          </Button>
          {mage === true ? (
            <span>
              <p className="txt-green">aktivní</p>
            </span>
          ) : (
            <span>
              <p className="txt-red">neaktivní</p>
            </span>
          )}
          <hr />
          <h2>Celkové AC: {(mage ? 13 : 10) + dexBonus + totalModifier}</h2>
          <hr />
          <Row>
            <Col>
              <Input
                type="text"
                placeholder="brnění, kouzlo, atd"
                name="nazev"
                onChange={handleChange}
                value={newModifier.nazev}
              />
            </Col>
            <Col xs={3}>
              <Input
                type="number"
                placeholder="hodnota"
                name="hodnota"
                onChange={handleChange}
                value={newModifier.hodnota}
              />
            </Col>
          </Row>
          <Button onClick={save} className="mt-3" block>
            + Přidat modifikátor
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ArmorNumber;
