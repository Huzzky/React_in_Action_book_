import React, { Component } from 'react'
import { getPost } from '../api/http';


class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
        this.clickbtn = this.clickbtn.bind(this);
        // console.log(this.props.data);
    }

    clickbtn() {
        let data = getPost()
        console.log("data", data);

    }

    render() {
        return(
            <div>
                <button onClick={this.clickbtn}>test 2</button>
            </div>
        )
    }
}

export default Posts;