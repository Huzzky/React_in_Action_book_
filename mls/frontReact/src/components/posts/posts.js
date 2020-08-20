import React, { Component } from 'react'
import { getPost } from '../api/http';
import './posts.css'
class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            reversePostDateBool: false,
        };
        this.getPostFunc = this.getPostFunc.bind(this);
        this.reversePostDate = this.reversePostDate.bind(this);
    }

    getPostFunc(){
        getPost()   
        .then( response => {
            if(response.status>=200){
                    const DATA_TEST = response.data.posts;
                        this.setState({
                            data: DATA_TEST,
                            isLoaded:true
                        });
                }
        })
        .catch(function(error){
            console.log(error);
        });
    }

    componentDidMount() {
        this.getPostFunc()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.updatePosts===true) {
            this.getPostFunc() 
            this.setState({
                bole:false
            })
            this.props.onChan(this.state.bole)      
        }
        else if(this.props.updatePosts===true){
            this.getPostFunc()       
            this.setState({
                bole:false
            })
            this.props.onChan(this.state.bole)  
        }
        
        
        return true;    
    }
    
    reversePostDate() {
        if (this.state.reversePostDateBool===true){
            this.setState({
                data: this.state.data.reverse(),
                reversePostDateBool: false,
            })
            console.log(this.state.data)
            
        } else if (this.state.reversePostDateBool===false){
            this.setState({
                data: this.state.data.reverse(),
                reversePostDateBool:true,
            })
            console.log(this.state.data)
        }
    }
    
    render() {
        const { data, isLoaded } = this.state;
        if (data.length>0){
        const POSTS_LIST = data.map((value, number) => 
            <div className="mainDiv-post" key={number}>
                <div className="secDiv-post">
                    <div className="t-Div-post">
                        <p className="p-div-post">{value.user_post}</p> 
                        <p className="p-div-post">{value.date_post}</p>
                    </div>
                    <hr/>
                    <div className="f-div-post">
                        <h1 className="h1-div-post">{value.content_post}</h1>
                        {/* <p key={value.id_post} className="p-div-post">Удалить</p> */}
                    </div>
                </div>
            </div>
        );


        return(
            <div>
                {/* <a onClick={this.reversePostDate}>Sort</a> */}
                {POSTS_LIST}
            </div>
        )
        }
        else if(data.length===0 && isLoaded){
            return(<div>
                <h3>Постов пока что нет, но Вы можете быть одним из первых</h3>
            </div>)
        } else if(data.length===0 && !isLoaded){
            return(<div>
                <h3>Загрузка, подождие</h3>
            </div>)
        }
    }
    }


export default Posts;