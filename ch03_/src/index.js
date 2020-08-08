import React, { Component } from 'react'
import {render} from 'react-dom'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  static defaultProp = (function() {
    console.log("ParentComponent : defaultProps");
    return {
      true: false,
    };
  })();
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillMount() {
    console.log("ParentComponent : componentWillMount");
  }
  componentDidMount() {
    console.log("ParentComponent : componentDidMount");
  }
  
  
  onInputChange(e) {
    const text = e.currentTarget.value;
    this.setState(() => ({
      text: text
    }));
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