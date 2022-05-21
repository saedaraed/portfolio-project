import Container from "@mui/material/Container";
import {
    AboutInf,
    AboutLeft,
    AboutRight,
    PersonalInformation,
    Information,
    AboutMe,
} from "../about/Style";
import Bar from "../../components/bar/Bar";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function About() {
    return ( <
        Container id = "about" >
        <
        AboutMe > About Me < /AboutMe>{" "} <
        AboutInf >
        <
        AboutLeft > { " " } <
        PersonalInformation >
        <
        Information > { " " } <
        MailIcon / >
        <
        label > Email: < /label> <span>saedaraed19@gmail.com</span > { " " } <
        /Information>{" "} <
        Information > { " " } <
        LocationOnIcon / >
        <
        label > Address: < /label> <span>Palestine-Gaza</span > { " " } <
        /Information>{" "} <
        Information > { " " } <
        GitHubIcon / >
        <
        label > Github: < /label>{" "} <
        span > https: //github.com/saedaraed </span>{" "}
        <
        /Information>{" "} <
        Information > { " " } <
        LinkedInIcon / >
        <
        label > Linkedin: < /label>{" "} <
        span > { " " }
        https: //www.linkedin.com/in/saeda-mgharee-78ba0321b/
        <
        /span>{" "} <
        /Information>{" "} <
        /PersonalInformation>{" "} <
        /AboutLeft>{" "} <
        AboutRight >
        <
        Bar done = "100"
        name = "HTML5 , CSS3 " / > { " " } <
        Bar done = "70"
        name = "javaScript , DOM , jQuery ,React.js" / >
        <
        Bar done = "80"
        name = "Library | Bootstrap5 " / >
        <
        Bar done = "70"
        name = "
        Git, Github, website hosting " /
        > { " " } <
        Bar done = "70"
        name = "
        Adoby(Photoshop, Illustrator, XD)

        " /
        > { " " } <
        Bar done = "70"
        name = "Maicrosoft Office(Word, Powerpoint, Excel) " / >
        <
        /AboutRight>{" "} <
        /AboutInf>{" "} <
        /Container>
    );
}
export default About;