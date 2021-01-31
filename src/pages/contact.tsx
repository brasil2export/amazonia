import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Menu from '../components/Menu'
import Footer  from '../components/Footer'
import Mapa from '../components/Mapa'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet' 


import { Container } from '../styles/pages/contact'
import Link from 'next/link'

const Contact: React.FC = () => {
  const Map = dynamic(
    () => import('../components/Mapa'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )


  return (
    <Container>
      <Head>
        <title>Contact</title>
      </Head>
      <Menu/>

      <div className="contactContainer">
       <Map/>
      </div>

     <Footer/>

     
    
    </Container>
  )
}

export default Contact
