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
    this.Oops= this.Oops.bind(this);
    this.state = {
      name: "Mark"
    };
  }

  // componentWillReceiveProps(nextProps) {
  // ! ЭТОТ МЕТОД УСТАРЕЛ И НЕ НУЖНО ИСПОЛЬЗОВАТЬ В НОВОМ КОДЕ ЕГО
  //   console.log('ChildComponent : componentWillReceiveProps()');/
  //   console.log('nextProps: ', nextProps);
  // }
  shouldComponentUpdate(nextProps, nextState) {
    /* 
    * Если этот метод по какой-либо причине возвращает false, вызов функции render() пропускается до следующего изменения состояния.
    * Это означает, что можно предотварить ненужное обновление компонента. 
    * Поскольку он не будет обновлен,
    * Тогда методы componentWillUpadte и componentDidUpdate не будет вызываться 
    * 
    */
    console.log('<ChildComponent/> - shouldComponentUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    return true;
  }

  Oops() {
    this.setState(() => ({
      oops: true,
    }));
  }
  
  // componentWillUpdate(nextProps, nextState) {
  // ! ЭТОТ МЕТОД УСТАРЕЛ И НЕ НУЖНО ИСПОЛЬЗОВАТЬ В НОВОМ КОДЕ ЕГО
  //   console.log('<ChildComponent/> - componentWillUpdate');
  //   console.log('nextProps: ', nextProps);
  //   console.log('nextState: ', nextState);
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('<ChildComponent/> - componentDidUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
  }
  
  

  // componentWillMount() {
  //  ! ЭТОТ МЕТОД УСТАРЕЛ И НЕ НУЖНО ИСПОЛЬЗОВАТЬ В НОВОМ КОДЕ ЕГО
  //   console.log("ChildComponent : componentWillMount");
  // }

  componentDidMount() {
    console.log("ChildComponent : componentDidMount");
  }

  componentWillUnmount() {
    console.log('ChildComponent : componentWillUnmount')
  }
  
  render() {
    console.log("ChildComponent : render");
    if (this.state.oops) {
      throw new Error('Something went wrong');
    }
    return [
      <div key='name'>Name: {this.props.name}</div>,
      <button key='error' onClick={this.Oops}>Create error</button>
    ];
  }
};

export default ChildComponent;
