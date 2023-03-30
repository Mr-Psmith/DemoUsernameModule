import React from "react";

import "./Card.css";

const Card = (props) => {


    return(
        <div className={`${"card"} ${props.className}`}>{props.children}</div> /* props.children gives us the content that is passed between the opening and closing tag of the component */
    );                                        /* the props. className gives us the option to use other classNames on the Card comp, and this syntax is the way to write it  */
};

export default Card;