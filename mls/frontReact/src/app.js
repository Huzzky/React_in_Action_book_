import React, { Component } from 'react'
import CreatePost from './components/createPost/createPost';
import { postAPost,} from './components/api/http';
import AboutSite from './components/md/aboutSite';
import Ads from './components/ads/ads';
import './app.css'

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
        <div className="AppDivMain">
          <AboutSite/>
          <CreatePost onSubmit={this.createNewPost} updatePost={this.updatePosts}/>
          <Ads/>
        </div>
      )
    }
  }


export default App;