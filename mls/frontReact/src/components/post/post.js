import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Filter from 'bad-words';
import fetch from 'isomorphic-fetch';


const filter = new Filter(); // * Применение конструктора для создаия нового экземпляра фильтра

class CreatePost extends Component {
    static propTypes = {
        content: PropTypes.string,
    }
    constructor(props){
        super(props);
        // * Установка состояния
        this.state = {
            content: "",
            valid: false, // * Создание простого свойства valid в локальном состоянии компнонента
       }
        //* Установка обработчиков событий
        this.handleSubmit = this.handleSubmit.bind(this); 
        // * Методы класса Bind для обработки передаваемых данных и публикаций изменений
        this.handlePostChange = this.handlePostChange.bind(this);
        // * Объявление метода обработки события отправи, React передаст событие обработчику
    }
    handlePostChange(event) {
        // * Объявление метода для класса, который будет использовать при обновлении текста тела(onChange)
        const content = filter.clean(event.currentTarget.value);
        // ? Передача значения в форму методу .clean() фильтра и использование возвращаемого значение для 
        // ? установки состояния

        // * Захват значения элемента textarea из свойства value элемента DOM
        this.setState(() => {
            //* Использование этого значения для установки состояния и обновления его с новым значением
            return {
                content,
                valid: content.length <= 280, 
                /* 
                * Определение допустимости сообщения путем установки максимальной длины.
                * Сообщение должно быть не более 280 символов
                */ 
            };
        });
    }
    handleSubmit() {
        if (!this.state.valid) {
            return;
        }
        const newPost = {
            // * Создание нового объекта публикации
            content: this.state.content,
        };
        console.log(this.state," this.state.content: " + this.state.content);
        Get()
        
        
    }
    render() {
        return(
        <div>
            <button onClick={this.handleSubmit}>Пост</button>
            <textarea placeholder="Что ты думаешь?" onChange={this.handlePostChange}/>
            
        </div>)
    }
}

function Get(){
    
    fetch('http://localhost:8000/mls/p/')
        .then(response => {
            // network failure, request prevented
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }
    
    
            return Promise.reject(new Error(response.statusText));
        })
        .then(response => response.json())
        .then(result => {
            console.log(result.posts)
        })
        .catch(error => {
            console.log(error)
            return null;
        });
}

export default CreatePost;