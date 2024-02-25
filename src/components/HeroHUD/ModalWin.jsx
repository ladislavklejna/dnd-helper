import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./ModalWin.css";
import { FaDiceD20 } from "react-icons/fa";
function ModalWin(
  { onToggle, diceValue, bonusValue, title, profienciBonus },
  args
) {
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
          <div className="vypis">
            <p className="soucet">
              <FaDiceD20 className="d20" /> + Bonus{" "}
              {profienciBonus === null ? "" : "+ Zdatnost"}
            </p>
            <hr />
          </div>
          <span className="d20 bold">{diceValue}</span>{" "}
          {bonusValue < 0 ? "" : "+"} {bonusValue}
          {profienciBonus && <> + {profienciBonus}</>}
          <br></br>= <br></br>
          <div className="text-red">
            {profienciBonus === null ? (
              <> {diceValue + bonusValue} </>
            ) : (
              <>{diceValue + bonusValue + profienciBonus}</>
            )}
          </div>
          <br />
          {diceValue === 20 ? <h2 className="d20">Kritický uspěch</h2> : ""}
          {diceValue === 1 ? (
            <h2 className="text-red">Kritický Neúspěch</h2>
          ) : (
            ""
          )}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalWin;
