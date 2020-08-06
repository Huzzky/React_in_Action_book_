import React, { Component } from "react"; // * Импорт React
import { render } from "react-dom"; // * Импорт ReactDOM
import PropTypes from "prop-types"; // * Импорт prop-types
import CreateComment from "./components/createCommit";
import Post from "./components/post";
import Comment from "./components/comment";

const node = document.getElementById("root"); // * Хранение ссылки на корневой элемент

const data = { // ! типа API 
  post: {
    id: 123,
    content:
      "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
    user: "Mark Thomas"
  },
  comments: [
    {
      id: 0,
      user: "David",
      content: "such. win."
    },
    {
      id: 1,
      user: "Haley",
      content: "Love it."
    },
    {
      id: 2,
      user: "Peter",
      content: "Who was Samuel Johnson?"
    },
    {
      id: 3,
      user: "Mitchell",
      content: "@Peter get off Letters and do your homework"
    },
    {
      id: 4,
      user: "Peter",
      content: "@mitchell ok :P"
    }
  ]
};



class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments // ! Передача комментариев на верхнем уровне в CommentBox 
      // ? Можно еще использовать Redux
    };
    console.log(this.state.comments);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }



  handleCommentSubmit(comment) {
    const comments = this.state.comments; 
    /* 
    * берутся все комментарии с контентом, именем и id(которые 
    * были ДО добавления новых комментарий), т.к. при добавлении новых комментариев
    * не было своего id
    //// Можно задать id внутри createComment
    // ! нельзя ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    */

    /* 
    * В методе handleSubmit в компоненте createComent нельзя передать id в setState
    * по типу id: Date.now()
    * Он просто ее не видит, не хочет видеть или еще что-то, что связано с моей рукожопостью
    ? надо разобраться с этим
    */
    comment.id = Date.now(); // ! id коммента присваивается время
    const newComments = comments.concat([comment]); // * т.к. id не поступает в createComment, то
    // * id задается здесь в виде времени Date.now()
    console.log("CommentBox -> handleCommentSubmit -> newComments", newComments)
    this.setState({
      comments: newComments
    });
    ///// ? вообще не знаю зачем эта такая функция
  }


  render() {

    return (
      <div className="commentBox">
        <Post
          id={this.props.post.id}
          content={this.props.post.content}
          user={this.props.post.user}
        />
        {this.state.comments.map(function(comment){
          return ( 
            <Comment
              key={comment.id}
              content={comment.content}
              user={comment.user}
            />
          );
        })}
        <CreateComment onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

render(
  <CommentBox
    comments={data.comments}
    post={data.post}
    />,
  node
);




/* 
    return React.createElement(
      "div",
      {
        className: "commentBox"
      },
      React.createElement(Post, {
        id: this.props.post.id,
        content: this.props.post.content,
        user: this.props.post.user
      }),
      this.state.comments.map(function(comment) {
        return React.createElement(Comment, {
          key: comment.id,
          id: comment.id,
          content: comment.content,
          user: comment.user + ' : '
        });
      }),
      React.createElement(CreateComment, {
        onCommentSubmit: this.handleCommentSubmit // ! Передача родительского метода компоненту CreateComment для использования
      })
    );
*/