import React, { Component } from 'react'
import CreatePost from './components/createPost/createPost';
import { PostAPost, getPost,} from './components/api/http';
import Posts from './components/posts/posts';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataGetPosts: []
      }
      this.createNewPost = this.createNewPost.bind(this);
      // this.GetPostApp = this.GetPostApp.bind(this);
    }

    createNewPost(post) {
      return PostAPost(post)
    }

    componentDidMount() {
      this.setState({
        dataGetPosts: getPost()
      });
      console.log(this.state.dataGetPosts)
    }
    
    
    
    render() {
      return (
        <div>
            <CreatePost onSubmit={this.createNewPost}/>
            <button onClick={this.GetPostApp}>test</button>
            <Posts data={this.state.dataGetPosts}/>
        </div>
      )
    }
  }


export default App;