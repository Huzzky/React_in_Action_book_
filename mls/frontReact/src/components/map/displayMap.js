import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { YMaps, Map, Placemark} from 'react-yandex-maps'

export default class DisplayMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            mapLoaded: false,
            location: {
                lat: props.location.lat,
                lng: props.location.lng,
                name: props.location.name
            }
        };
        this.clickOnMap = this.clickOnMap.bind(this);
        // this.ensureMapExists = this.ensureMapExists.bind(this); //* Привязка метода класса ensureMapExists
    }
    static propTypes = {
        location: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
            name: PropTypes.string
        }),
        displayOnly: PropTypes.bool
    };

    static defaultProps = {
        displayOnly: true,
        location: {
            lat: 34.1535641,
            lng: -118.1428115,
            name: null
        }
    };

    componentDidMount() {
    
    }

    clickOnMap() {
        
    }
    
    render() {
        return [
            <React.Fragment>
                <YMaps>
                    <Map instanceRef={inst => inst.events.add('click', this.clickOnMap)} defaultState={{ center: [55.751574, 37.573856], zoom: 5,}}>
                    
                </Map>
                </YMaps>
            </React.Fragment>
        ];
    }
}