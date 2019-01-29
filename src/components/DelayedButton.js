// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

handleDelayedClick = (e) => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
}

    render() {
        return (<div>
            <button onClick={this.handleDelayedClick}>Delayed Click!</button> 
        </div>)
    }
}

export default DelayedButton