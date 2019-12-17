import React, {Component} from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Nav from '../../components/NavLocalizacoes/NavLocalizacoes';

class Mapa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: []
        }
    }

    componentWillMount() {
        this.carregarLocalizacoes();
    }
    
    carregarLocalizacoes = () => {
        fetch("http://192.168.4.195:5000/Api/Localizacoes")
              .then(response => response.json())
              .then(data => this.setState({ lista: data }))
              .catch(error => console.log(error));
    }

    marker = () => {
        let marker = [];
        this.state.lista.forEach(element => {
            marker.push(
                <Marker  key={element.idLocalizacoes} 
                position={{ lat: element.latitude, lng: element.longitude }} onClick={() => <p>{Element.idLocalizacoes}</p>} />
            )
        })
         return marker;
    }

    render() {
        return (
            <div>
            <Nav></Nav>
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={{width:"100%",height:"100%"}}
                    initialCenter={{ lat: -23.532748, lng: -46.6460872}}
                    >
                    {this.marker()}
                </Map>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    
  })(Mapa);