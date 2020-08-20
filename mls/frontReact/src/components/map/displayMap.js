import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { YMaps, Map, Placemark} from 'react-yandex-maps'
import './displayMap.css'

export default class DisplayMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: {
                long: null,
                lat: null,

            }
            
        };
        this.clickOnMap = this.clickOnMap.bind(this);
        // this.ensureMapExists = this.ensureMapExists.bind(this); //* Привязка метода класса ensureMapExists
    }



    componentDidMount() {
    
    }

    clickOnMap(event) {
        this.setState({
            location:{
                long: event.get('coords')[0],
                lat: event.get('coords')[1]
            }
        })
        console.log(this.state)
    }

    render() { 
        const coordinates = [
        [this.state.location.long, this.state.location.lat],
        ];
        return [
            <div className="main-div-map">
                <YMaps>
                    <Map defaultState={{ center: [55.751574, 37.573856], zoom: 10,}} onClick={this.clickOnMap} width="100%">
                    {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                </Map>
                </YMaps>
            </div>
        ];
    }
}