import React, { Component } from 'react'
import axios from 'axios'


class FTA extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            valid: false,
            rtp: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInp = this.handleInp.bind(this);
        this.handleTxtAr = this.handleTxtAr.bind(this);
    }

    componentDidMount() {

        this.setState({
            btn: <button type='submit' onClick={this.handleSubmit}>Send to Server</button>
        })
        const init = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
        fetch('http://127.0.0.1:8000/api/posts/?format=json', init)
        .then((response) => response.json())
        .then((response)=>{
            const dp = response
            console.log(dp);
            
            this.setState({
                data: dp.posts,
                isLoaded: true                
            })
        })
        .catch((e) => {
            console.log(e)
        });
    }    

    handleTxtAr(e) {
        // const { title_post } = this.state;
        // if (e.currentTarget.value.length<=300 && e.currentTarget.value.length>0 && title_post<=120 && title_post>0) {
        // this.setState({
        //     content_post: e.currentTarget.value,
        //     rtp: "",
        //     btn: <button type='submit' onClick={this.handleSubmit}>Send to Server</button>
        // })}
        // else if (e.currentTarget.value.length>300){
        //     this.setState({
        //         rtp: <h2>Вы ввели больше 300 символов в посте</h2>,
        //         btn: <button type='submit' disabled>Send to Server</button>
        //     })
        // } else if (e.currentTarget.value.length===0){
        //     this.setState({
        //         btn: <button type='submit' disabled>Send to Server</button>
        //     })
        // }
        this.setState({
            content_post: e.currentTarget.value
        })
    }

    handleInp(e){
        // if(e.currentTarget.value.length<120 && e.currentTarget.value.length>0) {
        // this.setState({
        //     title_post: e.currentTarget.value,
        //     rtp: "",
        //     btn: <button type='submit' onClick={this.handleSubmit}>Send to Server</button>
        // })}
        // else if(e.currentTarget.value.length>120){
        //     this.setState({
        //         rtp: <h2>Вы ввели больше 120 символов в посте</h2>,
        //         btn: <button type='submit' disabled>Send to Server</button>
        //     })
        // } else if(e.currentTarget.value.length===0){
        //     this.setState({
        //         btn: <button type='submit' disabled>Send to Server</button>
        //     })
        // }

        this.setState({
            title_post: e.currentTarget.value
        })
    }
    
    handleSubmit() {
        const { title_post, content_post } = this.state;
        axios.post('http://127.0.0.1:8000/api/posts/', {
            
                "posts": {
                  "title_post": title_post,
                  "content_post": content_post,
                  "author_id": 2
                }
            
        })
        .catch(function(error){
            console.log(error);
        });
        
    }
    
    render() {
        console.log(this.state, "render")
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return(
                <div>Ждите, загрузка</div>
            )
        }
        else if (isLoaded){
            const { data, rtp, btn } = this.state;
            const listItems =data.map((value) =>
            <div>
                <h1>{value.title_post}</h1>
                <p >{value.content_post}</p>
            </div>   
            );
            return(
                <div>
                    <h3>Загрузка закончена</h3>
                    <h2>Посты:</h2>
                    {listItems}
                    <form action="post">
                        <input id="inpt" type='text' onChange={this.handleInp} placeholder="Заголовок"/>
                        <textarea name="" id="txtar" cols="30" rows="10" onChange={this.handleTxtAr} placeholder="Пост"></textarea>
                        {btn}
                        {rtp}
                    </form>
                </div>
            )
        }
    }
}


export default FTA;