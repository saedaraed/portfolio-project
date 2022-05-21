import Item from "../../components/item/Item";
import { products } from "../../data";
import photo from "../../assets/images/86856352-96fd-4b82-8890-08c29505e61c.png";
import { ListStyle } from "./Style";
import Container from "@mui/material/Container";

function List() {
    return ( <
        div id = "list"
        style = {
            { marginTop: "50px" } } >
        <
        Container > { " " } <
        h2 style = {
            {
                borderLeft: "#00aeff solid 5px",
                paddingLeft: "10px",
                color: "#00aeff",
                textAlign: "left",
            }
        } >
        { " " }
        My Portfolio { " " } <
        /h2>{" "} <
        ListStyle > { " " } {
            products.map((value) => ( <
                Item key = { value.id }
                imag = { photo }
                link = { value.link }
                />
            ))
        } { " " } <
        /ListStyle>{" "} <
        /Container>{" "} <
        /div>
    );
}

export default List;