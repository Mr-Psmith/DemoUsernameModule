import React from "react";

import "./Card.css";

const Card = (props) => {


    return(
        <div className="card">{props.children}</div> /* props.children gives us the content that is passed between the opening and closing tag of the component */
    );
};

export default Card;