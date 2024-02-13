import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalWin({ onToggle, initiativeDice, initiativeBonus }, args) {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    toggle();
  }, [onToggle]);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Iniciativa</ModalHeader>
        <ModalBody>
          {initiativeDice} + {initiativeBonus}
          <br></br>= <br></br>
          {initiativeBonus + initiativeDice}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalWin;
