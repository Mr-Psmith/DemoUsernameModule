import React from "react";
import Button from "./Button";
import Card from "./Card";

import "./ErrorModal.css";

const ErrorModal = props => {


    return (
    <div className="backdrop" onClick={props.closeModalHandler}>
        {/* <div className="backdrop" /> For max this has the backdrop, and thje other divc is just a wrapper. dunno why exactly, but probably bec of the css module stuff */}
        <Card className="modal" >
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
    </div>);
};

export default ErrorModal;