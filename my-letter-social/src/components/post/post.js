import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CreatePost extends Component {
    static propTypes = {

    }
    constructor(props){
        super(props);
        // * Установка состояния
        this.state = {
            content: "",
       }
        //* Установка обработчиков событий
        this.handleSubmit = this.handleSubmit.bind(this); 
        // * Методы класса Bind для обработки передаваемых данных и публикаций изменений
        this.handlePostChange = this.handlePostChange.bind(this);
        // * Объявление метода обработки события отправи, React передаст событие обработчику
    }
    handlePostChange(e) {
        // * Объявление метода для класса, который будет использовать при обновлении текста тела(onChange)
        console.log("Обновление текста в посте");
    }
    handleSubmit() {
        console.log("Успешно отправлено");
    }
    render() {
        return(
        <div>
            <button onClick={this.handleSubmit}>Пост</button>
            <textarea placeholder="Что ты думаешь?" onChange={this.handlePostChange} value={this.state.content}/>
            
        </div>)
    }
}

export default CreatePost;