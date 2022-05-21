import React from "react";
import Intro from "../../components/intro/Intro";
import About from "../../components/about/About";
import List from "../../components/list/List";
import TabWork from "../../components/tab/Tab";
import Contact from "../../components/contact/Contact";
import Navbar from "../../components/navbar/Navbar";
import Exp from "../../components/experience/Exp";
import Featured from "../../components/featured/Featured";
import Toggle from "../../components/toggle/Toggle";
import { useState } from "react";

function Home() {
    // const [dark, setDark] = useState(false);

    return ( <
        div > { " " } <
        Navbar / >
        <
        Intro dark / > < About / >
        <
        Exp / >
        <
        Featured / >
        <
        List / >
        <
        Contact / >
        <
        div style = {
            {
                width: "100%",
                backgroundColor: "#59b2cf",
                padding: "10px 0px",
                marginTop: "50px",
            }
        }
        className = "recieved" >
        { " " }
        2022 Saeda R.All Rights Reserved. { " " } <
        /div>{" "} <
        /div>
    );
}

export default Home;