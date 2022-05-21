import { Feat } from "./Style";
import pic from "../../assets/images/PBLTHX1.png";
import Container from "@mui/material/Container";

function Featured() {
    return ( <
        div id = "featured"
        style = {
            {
                marginTop: "50px",
                textAlign: "left",
            }
        } >
        <
        Container > { " " } <
        h2 style = {
            {
                borderLeft: "#00aeff solid 5px",
                paddingLeft: "10px",
                color: "#00aeff",
            }
        } >
        { " " }
        Featured Work { " " } <
        /h2>{" "} <
        Feat > { " " } <
        ul >
        <
        li >
        Building and designing all types of websites; personal websites, e -
        commerce website, company profiles. { " " } <
        /li>{" "} <
        li >
        A distinctive website that fits all screens(computer screens &
            mobile). { " " } <
        /li>{" "} <
        li >
        High quality modern responsive design that guarantees ease of use. { " " } <
        /li>{" "} <
        li > Raise the site on hosting and link it with a domain. < /li>{" "} <
        /ul>{" "} <
        img src = { pic }
        />{" "} <
        /Feat>{" "} <
        /Container>{" "} <
        /div>
    );
}

export default Featured;