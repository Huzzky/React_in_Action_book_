import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateComment extends Component {
    constructor(props) {
      super(props); // * Вызов функции super в конструкторе класса и назначение объекта начального состояния 
      // * экземпляру свойства класса.
      this.state = {
        content: "",
        user: "",
      };
      // ! Поскольку компоненты, созданные с помощью классов автоматически не связываются с методами компонентов,
      // ! вам нужно связать их в конструкторе 
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(event) {  // * Назначение обработки события для обработки изменений в поле author 
      const val = event.currentTarget.value; // ! Получим значение из event.currentTarget.value
      this.setState(() => ({ // ! Используется для обновление компонента, а точнее, this.state
        user: val
      }));
    }
    handleTextChange(event) {
      const val = event.currentTarget.value; // ? Можно связать по id, но для каждого свой интерес
      this.setState({
        content: val
      });
    }
    handleSubmit(event) { // * Обработчик отправления (недоработанный)
      event.preventDefault(); 
      this.props.onCommentSubmit({ // ! Вызов этой функции, которая была передена родителей как свойство, - вы 
        user: this.state.user.trim(), // ! передаете данные из формы и перезагружаете форму, чтобы пользователь
        content: this.state.content.trim(), // ! знал, что его действие успешно прошло
      });
  
      this.setState(() => ({
        user: "",
        content: ""
      }));
    }
    render() {
      return (<React.Fragment>
        <br/>
        <br/>
        <br/>
        <br/>
        <form className="createComment" onSubmit={this.handleSubmit}>
          {/* Без связи с методом не будет с правильным событием и вашим методом */}
          <input type="text" placeholder="Your name" value={this.state.user} onChange={this.handleUserChange}/>
          <input type="text" placeholder="Comment..." value={this.state.content} onChange={this.handleTextChange}/>
          <input type="submit" value="Post"/>
        </form>
      </React.Fragment>)
    }
  }
CreateComment.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
    content: PropTypes.string
  };

export default CreateComment;

