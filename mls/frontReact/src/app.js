import React, { Component } from 'react'
import CreatePost from './components/createPost/createPost';
import { postAPost, getPost,} from './components/api/http';
import Posts from './components/posts/posts';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataGetPosts: []
      }
      this.createNewPost = this.createNewPost.bind(this);
    }

    createNewPost(post) {
      return postAPost(post)
    }
    
    render() {
      return (
        <div>
            <CreatePost onSubmit={this.createNewPost}/>
            <Posts data={this.state.dataGetPosts}/>
        </div>
      )
    }
  }


export default App;