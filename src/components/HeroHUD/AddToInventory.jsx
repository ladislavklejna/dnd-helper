import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

function AddToInventory({ item }, args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleAdd = () => {
    toggle();
  };
  return (
    <div>
      <Button block color="danger" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Pridani</ModalHeader>
        <ModalBody>
          <Input placeholder="Název" />
          <Input placeholder="Hodnota" />
          <Input placeholder="Váha" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAdd}>
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

export default AddToInventory;
