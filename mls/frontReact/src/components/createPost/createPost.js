import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Filter from 'bad-words';
import {v4 as uuidv4} from 'uuid';
import Post from '../posts/posts'
import DisplayMap from '../map/displayMap';
import "./createPost.css"



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
            valid: false,
            booleanUpdatePosts: false,
            eventOpenCreatePost: false,
            clickOpenMapInPost: false,
            // * Создание простого свойства valid в локальном состоянии компнонента
       }
        //* Установка обработчиков событий
        this.handleSubmit = this.handleSubmit.bind(this); 
        // * Методы класса Bind для обработки передаваемых данных и публикаций изменений
        this.handlePostChange = this.handlePostChange.bind(this);
        // * Объявление метода обработки события отправи, React передаст событие обработчику
        this.chan = this.chan.bind(this);
        this.eventOpenCreatePostBtn = this.eventOpenCreatePostBtn.bind(this);
        this.openAddMap = this.openAddMap.bind(this);
        this.closeAddMap = this.closeAddMap.bind(this);

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
    handleSubmit(event) {
        event.preventDefault()
        if (!this.state.valid) {
            return;
        }
        const DATA = {
            // * Создание нового объекта публикации
            content_post: this.state.content,
            uuid_post : uuidv4(),
            user_post_id: 1

        };
        this.props.onSubmit(DATA);
        this.setState({
            content: '',
            valid: null,
            booleanUpdatePosts:true,
            clickBtnCreatePost: true,
            eventOpenCreatePost:false,
            eventSubmitPost: "Пост опубликован"
            // TODO сделать, чтобы textarea очистилась после нажатия на кнопку
        });

        
    }
    componentDidMount() {
        this.setState({
            textarea: <textarea placeholder="Что Вы думаете?" className="txtarea-cp" onChange={this.handlePostChange}/>
        })
    }
    
    chan(boole){
        if (!boole){
        this.setState({
            booleanUpdatePosts: false
        })}
    }
    eventOpenCreatePostBtn() {
        this.setState({
            eventOpenCreatePost: true
        })
    }
    openAddMap(){
        this.setState({
            clickOpenMapInPost: true
        })
    }
    closeAddMap(){
        this.setState({
            clickOpenMapInPost: false,
        })
    }



    render() {
        const { booleanUpdatePosts, textarea, clickOpenMapInPost } = this.state;
            if(clickOpenMapInPost){
                return(
                    <div className="main-div-createpost">
                        {textarea}
                        <br/>
                        <button id="btnPost" onClick={this.handleSubmit}>Пост</button>
                        <br/>
                        <DisplayMap/>
                        <a onClick={this.closeAddMap}>Убрать карту</a>

                        <Post updatePosts={booleanUpdatePosts} onChan={this.chan}/>
                    </div>)
            } else if (!clickOpenMapInPost) {
                return(
                    <div className="main-div-createpost">
                        <div className="sec-div-createpost">
                            {textarea}
                            <br/>
                            <div className="panel-createpost-div">
                                <button id="btnPost" onClick={this.handleSubmit}>Пост</button>
                                <a onClick={this.openAddMap}>Добавить карту</a>
                            </div>
                        </div>
                        <Post updatePosts={booleanUpdatePosts} onChan={this.chan}/>
                    </div>)
            }
        }
        
    }


export default CreatePost;
