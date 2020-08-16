import React, { Component } from 'react'
import CreatePost from './components/post/post';

class App extends Component {
    constructor(props) {
      super(props);
      this.createNewPost = this.createNewPost.bind(this);
    }

    createNewPost(post) {
      this.setState( prevState => {
        return {
          posts: prevState.posts.concat(this.state.content)
        };
      });
      console.log(this.state.posts, "dasd")
    }
    
    render() {
      return (
        <div>
            <CreatePost onSubmit={this.createNewPost}/>
        </div>
      )
    }
  }


export default App;