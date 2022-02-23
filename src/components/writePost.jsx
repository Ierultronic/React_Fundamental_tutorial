import React, { Component } from "react";
import axios from "axios";

export default class profile extends Component{
    
    state={
            title:'',
            body:''
    }

    formSubmit = (event) => {
        event.preventDefault();
        axios.post('/blog', { //where this url will be redirect
            title: this.state.title, //all that value which its will take
            body: this.state.body
          })
          .then(function (response) { //use for success
            console.log(response);
          })
          .catch(function (error) { //use for error
            console.log(error);
          });
    }
    
    render(){
        return(
            <center>
            <div >
            <div class="jumbotron col-lg-4 bg-primary" >

            <form onSubmit={this.formSubmit}>
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" id="title" name="title" onChange={event => {this.setState({title:event.target.value})}}/>
            </div>
            <div class="mb-3">
                <label class="form-label">Details</label>
                <textarea class="form-control" name="body" onChange={event => {this.setState({body:event.target.value})}}>Write here </textarea>
            </div>
            
            <button type="submit" class="btn btn-danger">Publish</button>
            </form>
            </div>
            </div>
            </center>
        )
    }

}