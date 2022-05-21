import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../src/theme";

const StyledApp = styled.div `
  color: ${(props) => props.theme.fontColor};
`;

function App() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return ( <
        Router > { " " } <
        ThemeProvider theme = { theme === "light" ? lightTheme : darkTheme } >
        <
        GlobalStyles / >
        <
        StyledApp >
        <
        div className = "App" >
        <
        button style = {
            { positio: "absolute", marginBottom: "-50px" } }
        onClick = {
            () => themeToggler() } >
        { " " }
        Change Theme { " " } <
        /button>{" "} <
        div className = "cont" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        /Routes>{" "} <
        /div>{" "} <
        /div>{" "} <
        /StyledApp>{" "} <
        /ThemeProvider>{" "} <
        /Router>
    );
}

export default App;