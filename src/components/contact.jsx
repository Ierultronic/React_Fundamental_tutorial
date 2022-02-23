import React, { Component } from "react";

export default class contact extends Component{
    state ={
        count:0
    }

    Increase =() =>{
        this.setState({count:this.state.count + 1})
    }

    render(){
        return(
            <div>
            <h1>Jumlah korang klik button bawah ni = {this.state.count}</h1>
            <button onClick={this.Increase}>Ciclk me hehehehehe</button>
        </div>
        )
    }

}