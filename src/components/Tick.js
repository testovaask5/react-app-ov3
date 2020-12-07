import React from "react";

export default class Tick extends React.Component {
    constructor(props) {
        super(props)
        console.log(this)
        this.state = {
            time: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prevState) => ({
                time: prevState.time + 1
            }))
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h2>Time: {this.state.time}</h2>
            </div>
        )
    }
}