import React, { Component } from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

export default class Route extends Component{
    static propTypes = {
        path: PropTypes.string,
        component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    };
    render() {
        return invariant(false, "<Route> elements are for coding only and shouldn't be rendered");
        
    }
}