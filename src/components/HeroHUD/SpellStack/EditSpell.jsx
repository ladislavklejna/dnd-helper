import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import "./AddSpell.css";

function EditSpell({ data, idcko, updateBook }, args) {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(data.filter((fil) => fil.id === idcko));
  const [newSpell, setNewSpell] = useState(filter[0]);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setNewSpell({ ...newSpell, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Index editovaného kouzla v seznamu dat
    const index = data.findIndex((spell) => spell.id === idcko);

    // Vytvoření kopie seznamu dat
    const updatedData = [...data];

    // Aktualizace editovaného kouzla v seznamu
    updatedData[index] = newSpell;

    // Aktualizace seznamu dat v nadřazené komponentě
    updateBook(updatedData);

    toggle(); // Zavřít modální okno
  };
  return (
    <div>
      <Button className="add-spell" color="danger" onClick={toggle}>
        Upravit
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Uprava kouzla</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="nazev"
            name="name"
            onChange={handleChange}
            value={newSpell.name}
          />
          <Input
            type="number"
            placeholder="level"
            name="level"
            onChange={handleChange}
            value={newSpell.level}
          />
          <Input
            type="text"
            placeholder="dmg"
            name="dmg"
            onChange={handleChange}
            value={newSpell.dmg}
          />
          <Input
            type="text"
            placeholder="dosah"
            onChange={handleChange}
            name="range"
            value={newSpell.range}
          />
          <Input
            type="text"
            placeholder="trvani"
            onChange={handleChange}
            name="time"
            value={newSpell.time}
          />

          <Input
            type="select"
            placeholder="level"
            name="action"
            onChange={handleChange}
            // value={newSpell.action}
          >
            <option value={"akce"}>akce</option>
            <option value={"bonus"}>bonusová akce</option>
          </Input>

          <Input
            type="select"
            placeholder="Soustredení"
            name="focus"
            onChange={handleChange}
          >
            <option value={false}>Ne</option>
            <option value={true}>Ano</option>
          </Input>
          <Input
            type="select"
            placeholder="Soustredení"
            name="save"
            onChange={handleChange}
          >
            <option>Sila</option>
            <option>Obratnost</option>
            <option>Odolnost</option>
            <option>Inteligence</option>
            <option>Moudrost</option>
            <option>Charisma</option>
          </Input>
          <Input
            type="textarea"
            name="info"
            onChange={handleChange}
            value={newSpell.info}
          ></Input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditSpell;
