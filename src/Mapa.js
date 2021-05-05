import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Mapa extends Component {
  static defaultProps = {
    center: {
      lat: -34.61,
      lng: -58.41
    },
    zoom: 15
  };
   
  render() {
    return (

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDXOP0WONn8YOyoaZu1gCZGlb2Er11LrR8'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-34.611940}
            lng={-58.414133}
            text="Estamos aquí"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Mapa;

    
