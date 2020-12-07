// @ts-check
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Tick from "./components/Tick";

// JSX - JavaScript and XML
const elemJSX = <h1>Hello world!!!</h1>

ReactDom.render(
    <Tick />,
    document.getElementById('root')
)