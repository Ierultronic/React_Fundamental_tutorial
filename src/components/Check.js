import React, { Component } from "react";

class Check extends Component{
    // ni guna array
    // constructor(props){
    //     super(props);
    //     this.state={
    //         menteri:[
    //             {name:'mail'}
    //         ]
    //     }
    // }
// ni tak guna array/ direct je mart!
    state = {
        name: 'mail saberi'
    }

tukarName = (event) => {
    this.setState({
        name:event.target.value
    })
}

    render(){
        return(
            <div>
                <p>------------------------</p>
                <p>data binding</p>
                <input type='text' onChange={this.tukarName} value={this.state.name}></input>
                <h4> pundek {this.state.name}</h4>
                <p>------------------------</p>
            </div>
        )
    }
}

export default Check