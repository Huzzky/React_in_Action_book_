import React from 'react'
import { YMaps, Map, Placemark} from 'react-yandex-maps'
import './mapInPost.css'

export default class MapInReact extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.long===0.0 && this.props.lat===0.0){
            return(
                <React.Fragment/>
            )
        }else{
            return(
                <div>
                    <YMaps>
                        <div className="mapInPost-div">
                            <Map defaultState={{ center: [this.props.long, this.props.lat], zoom: 10,}} width="95%" >
                                <Placemark geometry={[this.props.long, this.props.lat]}/>
                            </Map>
                        </div>
                    </YMaps>
                </div>
            )
        }
    }
}