import React, { Component } from 'react'
import { getPost } from '../api/http';

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            testA: false,
        };
    }

    componentDidMount() {
        getPost()
        // TODO Check for status(200, 404, 400, 500)
        .then( response => {
            console.log(response.data, 'this method');
            const dataTest = response.data.posts;
            
            this.setState({
                data: dataTest
            })
        })
        .catch(function(error){
            console.log(error);
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.updatePosts, "nextProps", this.props.updatePosts, 'this.props')
        console.log(nextState, 'nextState')
        
        if (nextProps.updatePosts===true) {
           
            
            getPost()
                // TODO Check for status(200, 404, 400, 500)
                .then( response => {
                    console.log(response.data, 'this method');
                    const dataTest = response.data.posts;
                    
                    this.setState({
                        data: dataTest,
                    
                    })
                    
                })
            
                this.setState({
                    bole:false
                })
                this.props.onChan(this.state.bole)      
        }
        else if(this.props.updatePosts===true){
            getPost()
            // TODO Check for status(200, 404, 400, 500)
            .then( response => {
                console.log(response.data, 'this method');
                const dataTest = response.data.posts;
                
                this.setState({
                    data: dataTest,
                
                })
                
            })
        
            this.setState({
                bole:false
            })
            this.props.onChan(this.state.bole)  
        }
        
        
        return true;
        
    }
    
    

    render() {
        const { data } = this.state;
        const postsList = data.map((value, number) => 
            <div key={number}><h1>{value.content_post}</h1>
            <p>{value.user_post}</p> <p>{value.date_post}</p>
            </div>
        );
        return(
            <div>
                {postsList}
            </div>
        )
        }
    }


export default Posts;