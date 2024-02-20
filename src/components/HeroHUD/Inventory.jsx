import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import "./Inventory.css";
import AddToInventory from "./AddToInventory";

function Inventory(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    save();
  };
  const dataBackPack = JSON.parse(localStorage.getItem("backpack"));
  const [backpack, setBackpack] = useState(dataBackPack);

  //  naformatuje cislo na tisice
  const formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "Zl",
  });

  const save = () => {
    localStorage.setItem("backpack", JSON.stringify(backpack));
  };
  const add = (item) => {
    if (backpack === null) {
      setBackpack([item]);
    } else {
      setBackpack([...backpack, item]);
    }
  };

  const handleDelete = (e) => {
    const filter = backpack.filter((x) => x.name !== e.target.id);
    localStorage.setItem("backpack", JSON.stringify(filter));
    setBackpack(filter);
  };
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
              <th>nazev</th>
              <th>vaha</th>
              <th>hodnota</th>
            </thead>
            <tbody>
              {backpack &&
                backpack.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.weight}</td>
                    <td className="zl">{formatter.format(item.value)}</td>
                    <Button
                      key={item.name}
                      id={item.name}
                      onClick={handleDelete}
                      color="danger"
                    >
                      X
                    </Button>
                  </tr>
                ))}
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <AddToInventory add={add} />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Inventory;
