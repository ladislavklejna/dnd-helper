import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalWin.css";
function ModalWin({ onToggle, diceValue, bonusValue, title }, args) {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    toggle();
  }, [onToggle]);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className="check-rolls">
          {diceValue} {bonusValue < 0 ? "" : "+"} {bonusValue}
          <br></br>= <br></br>
          <div className="text-red">{diceValue + bonusValue}</div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalWin;
