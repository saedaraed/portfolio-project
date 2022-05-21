import React from "react";
import {
    Introduction,
    Name,
    Title,
    TitleItem,
    IntroLeft,
    TitleWrapper,
    Description,
    I,
    IntroRight,
    Shape,
    Image,
} from "../intro/Style";
import Container from "@mui/material/Container";
import pic from "../../assets/images/ec001bed-5709-44d8-a791-74c70ec34358.jfif";

function Intro() {
    return ( <
        Container sx = {
            {} } >
        <
        I >
        <
        IntroLeft >
        <
        Introduction > Hello, My name is < /Introduction>{" "} <
        Name > Saeda Mughari < /Name>{" "} <
        Title >
        <
        TitleWrapper >
        <
        TitleItem > React - Web Developer < /TitleItem>{" "} <
        TitleItem > Ui - Ux Designer < /TitleItem>{" "} <
        /TitleWrapper>{" "} <
        /Title>{" "} <
        Description className = "par" >
        A freelance Web Developer & Designer.I have more than three years of experience developing and designing websites, working in several organizations on several web development projects using the latest technology and software. { " " } <
        /Description>{" "} <
        /IntroLeft>{" "} <
        IntroRight >
        <
        Shape > < /Shape> <Image src={pic} / > { " " } <
        /IntroRight>{" "} <
        /I>{" "} <
        /Container>
    );
}

export default Intro;