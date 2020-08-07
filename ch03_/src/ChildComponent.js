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
  }
  render() {
    console.log('ChildComponent : render');
    return (
      <div>
        Name: {this.props.name} 
      </div>
    );
  }
};

export default ChildComponent;