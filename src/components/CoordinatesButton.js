// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

handleReceiveCoordinates = (e) => {
    let x = e.clientX
    let y = e.clientY
    let coordinates = [x, y]
    this.props.onReceiveCoordinates(coordinates)
}

    render(){
        return(<div>
            <button onClick={this.handleReceiveCoordinates}>Get Coordinates!</button>
        </div>)
    }
}

export default CoordinatesButton