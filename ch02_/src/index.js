import React from 'react'
import {render} from 'react-dom'
// import PropTypes from 'prop-types'
import ShallowMerge from './shallowMerge';
import Secret from './secret';
import Counter from './counter';
import Greeting from './greeting';
import UserCard from './userProfile';


class SelectComp extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
       clickSelect: 'main',
    };
    this.onButtonClickMain = this.onButtonClickMain.bind(this);
    this.onButtonClickFirst = this.onButtonClickFirst.bind(this);
    this.onButtonClickSec = this.onButtonClickSec.bind(this);
    this.onButtonClickThird = this.onButtonClickThird.bind(this);
    this.onButtonClick4 = this.onButtonClick4.bind(this);
  }

  onButtonClick4() {
    this.setState({
      clickSelect: 'up',
    })

  }
  onButtonClickFirst() {
    this.setState({
      clickSelect:"secret",
    });
  }
  onButtonClickSec() {
    this.setState({
      clickSelect: "sm",
    })
  }
  onButtonClickThird() {
    this.setState({
      clickSelect:'counter',
    })
  }
  onButtonClickMain() {
    this.setState({
      clickSelect: 'main',
    })
  }

  render() {
    const { clickSelect } = this.state;
    if (clickSelect==='main') {
      return(<div>
        <button onClick={this.onButtonClickFirst}>Secret</button>
        <button onClick={this.onButtonClickSec}>ShallowMerge</button>
        <button onClick={this.onButtonClickThird}>Counter</button>
        <button onClick={this.onButtonClick4}>UserProfile</button>
        <Greeting for="Vlad"/>
      </div>)
    }
    else if (clickSelect==="up") {
      return(<div>
        <UserCard/>
        <button onClick={this.onButtonClickMain}>Main</button>
      </div>)
    }
    else if (clickSelect==="sm") {
    return (
      <div>
        <ShallowMerge/>
        <button onClick={this.onButtonClickMain}>Main</button>
      </div>
    )}
    else if (clickSelect==="secret") {
      return (<div>
        <Secret/>
        <button onClick={this.onButtonClickMain}>Main</button>
      </div>)
    }
    else if (clickSelect==="counter") {
      return(<div>
        <Counter incrementBy={1}/>
        <button onClick={this.onButtonClickMain}>Main</button>
      </div>)
    } 
  }
}

render(<SelectComp/>,
  document.getElementById('root')
  );