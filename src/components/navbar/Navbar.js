import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toggle from "../../components/toggle/Toggle";
import { HashLink as Link } from "react-router-hash-link";
import { Navi } from "./Style";
import Container from "@mui/material/Container";

export default function Navbar() {
    return ( <
        Box sx = {
            { flexGrow: 1 } } >
        <
        AppBar sx = {
            { backgroundColor: "#00aeff ", boxShadow: "green" } }
        position = "static" >
        <
        Container > { " " } <
        Toolbar >
        <
        IconButton size = "large"
        edge = "start"
        color = "inherit"
        sx = {
            { mr: 2 } } >
        saeda { " " } <
        /IconButton>{" "} <
        Navi >
        <
        li >
        <
        Link style = {
            { color: "#fff", textDecoration: "none" } }
        to = "#about"
        smooth >
        { " " }
        About Me { " " } <
        /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link style = {
            { color: "#fff", textDecoration: "none" } }
        to = "#exp"
        smooth >
        { " " }
        Experience { " " } <
        /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link style = {
            { color: "#fff", textDecoration: "none" } }
        to = "#featured"
        smooth >
        { " " }
        Featured Work { " " } <
        /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link style = {
            { color: "#fff", textDecoration: "none" } }
        to = "#list"
        smooth >
        { " " }
        Portfolio { " " } <
        /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link style = {
            { color: "#fff", textDecoration: "none" } }
        to = "#contact"
        smooth >
        { " " }
        Contact Me { " " } <
        /Link>{" "} <
        /li>{" "} <
        /Navi>{" "} <
        /Toolbar>{" "} <
        /Container>{" "} <
        /AppBar>{" "} <
        /Box>
    );
}