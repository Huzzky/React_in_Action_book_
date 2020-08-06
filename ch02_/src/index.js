import React from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'

// class Secret extends React.Component{
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'top secret!',
//       };
//       this.onButtonClick = this.onButtonClick.bind(this);
//     }

//     onButtonClick() {
//       this.setState(() => ({
//         name:'Mark',
//       }));
//     }

//     render () {
//       return(<div>
//         <h1>My name is {this.state.name}</h1>
//         <button onClick={this.onButtonClick}>Reveral the secret!</button>
//       </div>)
//     }
// }

// render(
//   <Secret/>,
//   document.getElementById('root')
// );

// class ShallowMerge extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: {
//                 name: 'Mark',
//                 colors: {
//                     favorite: 'green',
//                 },
//                 //
//             },
//             //
//         };
//         this.onButtonClick = this.onButtonClick.bind(this);
//     }

//     onButtonClick() {
//         this.setState({
//             user: {
//               name: 'Vlad',
//               colors: {
//                 favorite: 'blue',
//             },
//           }
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>My favorite color is {this.state.user.colors.favorite} and my name is {this.state.user.name}</h1>
//                 <button onClick={this.onButtonClick}>Show the color!</button>
//             </div>
//         )
//     }
// }

// render(
//   <ShallowMerge/>,
//   document.getElementById('root')
// );


class Counter extends React.Component {
  static propTypes = {
    incrementBy: PropTypes.number,
    onIncrement: PropTypes.func.isRequired
  };
  static defualtProps = {
    incrementBy: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  
  onButtonClick() {
    this.setState(function(lastState, props) {
      return { count: lastState.count + props.incrementBy }; 
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onButtonClick}>++</button>
      </div>
    );
  }
}

render(<Counter incrementBy={1} />,
  document.getElementById('root')
  );