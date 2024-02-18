import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import AddToInventory from "./AddToInventory";

function Inventory(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [backpack, setBackpack] = useState([
    { id: 1, name: "mec", weight: "20", value: "500" },
  ]);

  return (
    <div>
      <Button block color="danger" onClick={toggle}>
        Inventář
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Inventář</ModalHeader>
        <ModalBody id="invent">
          <Table>
            <thead>
              <th>id</th>
              <th>nazev</th>
              <th>vaha</th>
              <th>hodnota</th>
            </thead>
            <tbody>
              {backpack.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.weight}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <AddToInventory />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Inventory;
