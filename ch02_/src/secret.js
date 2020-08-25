import React from 'react'

class Secret extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        name: 'top secret!',
      };
      this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
      this.setState(() => ({
        name:'Mark',
      }));
    }

    render () {
      return(<div>
        <h1>My name is {this.state.name}</h1>
        <button onClick={this.onButtonClick}>Reveral the secret!</button>
      </div>)
    }
}

export default Secret;