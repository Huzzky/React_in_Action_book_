import React, { Component } from 'react'
import CreatePost from './components/createPost/createPost';
import { postAPost,} from './components/api/http';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataGetPosts: [],
      }
      this.createNewPost = this.createNewPost.bind(this);
    }

    createNewPost(post) {
      return postAPost(post)
      // return post
    }
    
    render() {
      return (
        <div>
            <CreatePost onSubmit={this.createNewPost} updatePost={this.updatePosts}/>
        </div>
      )
    }
  }


export default App;