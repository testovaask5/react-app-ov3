import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

// JSX - JavaScript and XML
const elemJSX = <h1>Hello world!!!</h1>

ReactDom.render(
    <App name="John" surname="Smith" />,
    document.getElementById('root')
)