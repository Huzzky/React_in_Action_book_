import React from 'react';
import book_1 from './img/book_1.jpg'
import bool_2 from './img/book_2.jpg'
import './ads.css'

export default class Ads extends React.Component{

    render() {
        return(
            <div className="div-img-ads">
                <img src={book_1} className="img-ads-1" width='380' height='480'></img>
                <img src={bool_2} width='380' height='480' className="img-ads-2"></img>
            </div>
        )
    }

}