import React from "react";
import { Card } from "./Style";

function Item(props) {
    return ( <
        div style = {
            { width: "32%" } }
        className = "card" > { " " } <
        Card > { " " } <
        a href = { props.link } >
        <
        img src = { props.imag }
        />{" "} <
        /a>{" "} <
        /Card>{" "} <
        /div>
    );
}

export default Item;