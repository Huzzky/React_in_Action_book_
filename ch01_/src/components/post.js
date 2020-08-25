import React, { Component } from "react";
import PropTypes from "prop-types";


class Post extends Component { // * Создание класса React в качестве компонента Post.
    render() {
      return(<div className="post">
        <h2 className="postAuthor" id={this.props.id}>{this.props.user}: <span className="postBody">{this.props.content}</span></h2>
        {this.props.children} 
      </div>)
      // * this.props.user ссылается на экземпляр компонента, а не на сценарий класса React
      // * this.props.children Нужно для того, чтобы он мог отображать дочерные элементы
    }
  }

Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };
export default Post;




/* 
      return React.createElement(
        "div",
        {
          className: "post"
        },
        React.createElement(
          "h2",
          {
            className: "postAuthor",
            id: this.props.id
          },
          this.props.user,
          React.createElement(
            "span",
            {
              className: "postBody"
            },
            this.props.content
          ),
          this.props.children
        )
      );
*/