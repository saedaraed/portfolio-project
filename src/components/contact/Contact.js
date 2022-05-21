import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Form, Submit } from "./Style";
const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_7924yc8",
                "template_j6dp9hr",
                formRef.current,
                "OC8ozqW5cuDkRBEie"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return ( <
        >
        <
        p style = {
            { marginTop: "100px", fontWeight: "600", fontSize: "18px" } } > { " " }
        You are free to call me at any time. { " " } <
        /p>{" "} <
        p style = {
            { marginBottom: "30px", fontWeight: "600", fontSize: "18px" } } > { " " }
        I would be very happy to hear from you and discuss any ideas you have. { " " } <
        /p>{" "} <
        Form id = "contact"
        smooth ref = { formRef }
        onSubmit = { handleSubmit } >
        <
        input type = "text"
        name = "user_name"
        placeholder = "your name" / >
        <
        input type = "email"
        name = "user_email"
        placeholder = "your email" / >
        <
        textarea name = "message"
        placeholder = "your message" / >
        <
        Submit type = "submit"
        value = "Send" / > { done && "thank you.." } { " " } <
        /Form>{" "} <
        />
    );
};

export default Contact;