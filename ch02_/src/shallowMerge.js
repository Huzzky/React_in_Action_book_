import React from 'react'


class ShallowMerge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'Mark',
                colors: {
                    favorite: 'green',
                },
                //
            },
            //
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            user: {
              name: 'Vlad',
              colors: {
                favorite: 'blue',
            },
          }
        });
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.user.colors.favorite} and my name is {this.state.user.name}</h1>
                <button onClick={this.onButtonClick}>Show the color!</button>
            </div>
        )
    }
}

export default ShallowMerge;