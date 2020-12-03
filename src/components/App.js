import React from 'react'
import { Hello } from "./Hello";

export default function App(props) {
    return <Hello mark="!!!" {...props} />
}