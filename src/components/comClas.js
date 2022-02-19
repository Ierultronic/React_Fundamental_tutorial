import React, { Component } from "react";


class Learning extends Component{
    constructor(props){
        super(props);
        this.state = { //letak "this" keyword sebab nak rujuk consturctor 
            buah:[
                {name:'Manggakali dia ni', weight:'420gm'},
                {name:'alololololop', weight:'320gm'},
                {name:'malu sama teman sayunk', weight:'690gm'},
            ]
        }
    }
clickHandler = () => {
    alert('hehe tiddies')
}

    render(){
        return(
            <div>
                <p>check dis out: <button onClick={this.clickHandler}>( . Y . )</button></p>
                <h3>-ni adalah class component- contoh pakai state macamni: </h3>
                <h3>{this.state.buah[0].name}</h3>
                <h3>{this.state.buah[1].name}</h3>
                <h3>{this.state.buah[2].name}</h3>
            </div>
        ) 
    }

}

export default Learning