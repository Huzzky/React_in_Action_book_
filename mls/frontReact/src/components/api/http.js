import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch';

class FetchGet extends Component{

    componentDidMount() {
        fetch('http://127.0.0.1:8000/mls/p/')
            .then(response => {
                // network failure, request prevented
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response);
                }
        
        
                return Promise.reject(new Error(response.statusText));
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
                return null;
            });
    }
}

export default FetchGet;