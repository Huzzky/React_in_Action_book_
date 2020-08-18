import React, { Component } from 'react'
import { getPost } from '../api/http';


class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
        console.log(this.props.data, "this data")
        
    }

    componentDidMount() {
        getPost().then(function(response){
            console.log(response.data, 'this method')
        })
        

    }

    render() {
        return(
            <div>
                Test
            </div>
        )
    }
}

export default Posts;