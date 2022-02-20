import React, { Component } from "react";
import "./comClas.css";

class Learning extends Component{
    constructor(props){
        super(props);
        this.state = { //letak "this" keyword sebab nak rujuk consturctor 
            buah:[
                {name:'Manggakali dia ni', weight:'420gm'},
                {name:'alololololop', weight:'320gm'},
                {name:'malu sama teman sayunk', weight:'690gm'},
            ],
            stats:[
                {mesej:'Sebelum tukar state guna button tiddies'}
            ]
        }
    }
clickHandler = () => {
  //  alert('hehe tiddies')
  this.setState({
    buah:[
        {name:'You Are Scammer!', weight:'420gm'},
        {name:'Filet Mignon', weight:'320gm'},
        {name:'asyebididbidibidumm', weight:'690gm'},
    ],
    stats:[
        {mesej:'Selepas tukar state guna button tiddies'}
    ]
  })
}

    render(){
        const style = {
            backgroundColor: 'orange',
            font: 'inherit',
            border: '2px solid maroon',
            padding: '10px',
            cursor: "pointer"
        };

        return(
            <div>
                <p>------------------------</p>
                <p>check dis out: <button style={style} onClick={this.clickHandler}>( . Y . )</button></p>
                <h3>-ni adalah class component- contoh pakai state macamni: </h3>
                <p>{this.state.stats[0].mesej}:</p>
                <h3 className="Card">-{this.state.buah[0].name}</h3>
                <h3 className="Card">-{this.state.buah[1].name}</h3>
                <h3 className="Card">-{this.state.buah[2].name}</h3>
                <p>------------------------</p>
            </div>
        ) 
    }

}

export default Learning