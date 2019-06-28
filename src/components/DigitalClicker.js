import React from 'react'

export default class DigitalClicker extends React.Component{

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }
    handleClick = () =>{
        let clicked = this.state.timesClicked +1
        this.setState({timesClicked :clicked}, ()=>{console.log(this.state.timesClicked)})
    }
    render(){
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}