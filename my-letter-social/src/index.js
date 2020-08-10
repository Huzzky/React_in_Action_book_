import React from 'react';
import {render} from 'react-dom';
import CreatePost from './components/post/post';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: Date(),
    }
  };

  render() {
    return (
      <div>{this.state.date}
      <CreatePost/>
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById("root"),
);
