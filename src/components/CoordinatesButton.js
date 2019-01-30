// Code CoordinatesButton Component Here
 import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    constructor(props){
        super(props);
        this.state = { onReceiveCoordinates:[0,0] };
    }

    handleOnClick = (e) => {
        this.setState({ onReceiveCoordinates: [e.clientX, e.clientY] })
        this.props.onReceiveCoordinates(this.state.onReceiveCoordinates)
    }

    render (){
        return(
            <button onClick={this.handleOnClick}>Coordinates Button</button>
        )
    }

 }