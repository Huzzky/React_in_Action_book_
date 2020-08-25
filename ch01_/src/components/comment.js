import React, { Component } from "react";
import PropTypes from "prop-types";

class Comment extends Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      return(<div className="comment">
        <h2 className="commentAuthor">{this.props.user}</h2>
        <span className='commentContent'>{this.props.content}</span>
      </div>)
    }
  }
  
Comment.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  };

  export default Comment;