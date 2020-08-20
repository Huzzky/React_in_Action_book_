import React from 'react'
import './aboutSite.css'

export default class AboutSite extends React.Component{

    render() {
        return(
            <div className="md-md">
                <div className="sec-div-as">
                    <div className="third-div-as">
                        <h1 className="h1-main-as">Здравствуйте!</h1>
                        <br/>
                        <br/>
                        <p className="p-as">
                        Далеко-далеко за словесными горами в стране гласных и согласных живут <a target="_blank" href="https://ru.wikipedia.org/wiki/Lorem_ipsum">рыбные тексты</a>. 
                        Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}