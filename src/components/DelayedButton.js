import React, { Component } from 'react'

class DelayedButton extends Component {
  handleClick = event => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render () {
    return <button onClick={this.handleClick}>Button</button>
  }
}

export default DelayedButton
