import React, { Component } from "react";
// const axios = require('axios');
import axios from "axios";

export default class blog extends Component{

    state={
        posts:[],
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) =>  {
                this.setState({posts:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render(){

        const postes = this.state.posts;
        const allposts = postes.map((post,idx) =>{

            return (
                <div>
                    <a href="">{idx +1}-{post.title}</a><br></br>
                    <p>{post.body}</p>
                </div>
            )

        });
        
        return(
            <div>
                <h1><marquee class="marq" bgcolor="Green" behavior="alternate" direction="left" loop="">Ini adalah blog punya component</marquee></h1>
                <div class="d-flex text-center">
                    <div class="flex-grow-1 ms-3">
                    {allposts}
                    </div>
                </div>
            </div>
        )
    }

}