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
    console.log('ParentComponent : state');
    this.state = {
      text: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  // componentWillMount() {
  // ! ЭТОТ МЕТОД УСТАРЕЛ И НЕ НУЖНО ИСПОЛЬЗОВАТЬ В НОВОМ КОДЕ ЕГО
  //   console.log("ParentComponent : componentWillMount");
  // }
  componentDidMount() {
    console.log("ParentComponent : componentDidMount");
  }
  
  componentWillUnmount() {
    console.log("ParentComponent : componentWillUnmount")
  }
  
  onInputChange(e) {
    const text = e.currentTarget.value;
    this.setState(() => ({
      text: text
    }));
  }
  componentDidCatch(err, errorInfo) {
    // * Поиск неконтролируемых ошибок 
    console.log("componentDidCatch");
    console.error(err);
    console.error(errorInfo);
    this.setState(() => ({
      err, errorInfo
    }));
  }
  
  render() {
    console.log('ParentComponent : render');
    if (this.state.err) {
      return (
        <details style={{whiteSpace: 'pre-wrap'}}>
          {this.state.error && this.state.error.toString()}
          <br/>
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
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