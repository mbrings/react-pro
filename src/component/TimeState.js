import React ,{ Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div>{ this.state.date.toLocaleTimeString() }</div>
        )
    }
}

export default Time;