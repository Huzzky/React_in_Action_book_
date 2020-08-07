import React, { Component } from 'react'
import {render} from 'react-dom'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    this.setState({
      text: e.currentTarget.value,
    });
  }
  render() {
    console.log('ParentComponent : render');
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
      <input key="input" value={this.state.text} onChange={this.onInputChange} />,
      <ChildComponent key="ChildComponent" name={this.state.text} />
    ];
  }
};

render(
  <ParentComponent />,
  document.getElementById('root'),
);