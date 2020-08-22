import React from 'react'
import { YMaps, Map, Placemark} from 'react-yandex-maps'

export default class MapInReact extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.long, this.props.lat);
    }

    render() {
        return(
            <div>
                <YMaps>
                    <Map defaultState={{ center: [this.props.long, this.props.lat], zoom: 10,}} >
                    <Placemark geometry={[this.props.long, this.props.lat]}/>
                    </Map>
                </YMaps>
            </div>
        )
    }
}