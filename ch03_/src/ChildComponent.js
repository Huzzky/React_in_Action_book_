import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildComponent extends Component {
  static propTypes = {
    name: PropTypes.string,
  };
  static defaultProps = (function() {
    console.log('ChildComponent : defaultProps');
    return {};
  })();
  constructor(props) {
    super(props);
    console.log('ChildComponent : state');
    this.state = {
      name: "Mark"
    };
  }

  componentWillMount() {
    console.log("ChildComponent : componentWillMount");
  }

  componentDidMount() {
    console.log("ChildComponent : componentDidMount");
  }
  render() {
    if (this.state.oops){
      throw new Error("Something went wrong");
    }
    console.log("ChildComponent : render");
    return [
      <div key='name'>Name: {this.props.name}</div>
    ];
  }
};

export default ChildComponent;