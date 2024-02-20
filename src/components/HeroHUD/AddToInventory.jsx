import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

function AddToInventory({ add }, args) {
  const [modal, setModal] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    value: "",
    weight: "",
  });

  const toggle = () => setModal(!modal);
  const handleAdd = () => {
    toggle();
    add(newItem);
    setNewItem({
      name: "",
      value: "",
      weight: "",
    });
  };
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Button block color="danger" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Pridani</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Název"
            name="name"
            onChange={handleChange}
            value={newItem.name}
          />
          <Input
            placeholder="Hodnota"
            name="value"
            onChange={handleChange}
            value={newItem.value}
          />
          <Input
            placeholder="Váha"
            name="weight"
            onChange={handleChange}
            value={newItem.weight}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAdd}>
            OK
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddToInventory;
