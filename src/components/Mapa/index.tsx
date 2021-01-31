import { Map, TileLayer,Marker,Popup,  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Leaflet, { LatLngBounds } from 'leaflet' 
import MarkIcon from '../../assets/mapMark.png'
import {Container} from './styled'
const Mapa: React.FC  = ( ) =>{
  // const position = {-23.6078786,-46.8399349,18z}
  const token = "pk.eyJ1IjoiYWxleHhjYW1hcmdvIiwiYSI6ImNra2lzcWY5czBjYWEyd29pczFmcGk3angifQ.2MpMIBI38UWj_pw-wmgz5A"
const ACCESS_TOKEN_MAP_BOX = `access_token=${token}`
  console.log(process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX)
  const position = {

  }
  const mapIcon = Leaflet.icon({
    iconUrl:MarkIcon ,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
  })

  return (
 <Container>
   { Map && (
      <Map 
      center={[-23.6080245,-46.8410031]}
      zoom={17}
      style={{ width: '100%', height: '100%' }}
      >
  
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer
        url={'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleHhjYW1hcmdvIiwiYSI6ImNra2w2YTh0ZjBodG8ycHBkMWwxa2l1ZnYifQ.C7vKp7acHATtUIUycDn91g'}
      />

  
      <Marker 
          position={[-23.6074881,-46.8396939]}
          icon={mapIcon}
      >
          
      <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup" >
          Las das meninas
      </Popup>
  
      </Marker>    
      </Map>
   )}
 </Container>
  )
}

export default Mapa