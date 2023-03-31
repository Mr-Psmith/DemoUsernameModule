import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

import "./ErrorModal.css";

const Backdrop = (props) => {
  /* This should be a separate comp, but in this app we only use this here, so we wont.  */
  return <div className="backdrop" onClick={props.closeModalHandler} />;
  /* <div className="backdrop" /> For max this has the backdrop, and the other div is just a wrapper. dunno why exactly, but probably bec of the css module stuff or bec semantic reasons, but I changed this later bec of the Portal stuff either way */
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.modalTitle}</h2>
      </header>
      <div className="content">
        <p>{props.modalMessage}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.closeModalHandler}>Whatever, Sim, F.off</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop closeModalHandler={props.closeModalHandler} />, document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<ModalOverlay modalTitle={props.modalTitle} modalMessage={props.modalMessage} closeModalHandler={props.closeModalHandler} />, document.getElementById("overlay-root"))}
    </>
  );
};

export default ErrorModal;
