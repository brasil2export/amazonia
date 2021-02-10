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
      <div className="main">
        <div className="adress">
      
          <div>
            <h5>
              Adreess
            </h5>
            <p>Rua João Paulo Ablas, 1400</p>
            <p>Galpão Número 4</p>
            <p>Bairro Jardim da Glória</p>
            <p>Cotia, SP, Brasil</p>
            <p>CEP: 06711-250</p>
          </div>

          <div>
            <h5>SEJA UM DISTRIBUIDOR</h5>
            <a href="tel:+551136377711">+55 11 3637 7711</a>
            <a href="mailto:info@amazoniatherapy.com.br">info@amazoniatherapy.com.br</a>
          </div>


          <div className="form">
          <form action="" method="post">
            <legend>Send a Message</legend>
            <fieldset>
              
              <input required type="text" name="name"/>
              <label className="labelForm"  htmlFor="name">Name</label>
            </fieldset>
            <fieldset>
              <input required type="text" name="email"/>
              <label className="labelForm" htmlFor="email" >Email</label>
            </fieldset>
            <fieldset>
              <label htmlFor="message">message</label>
              <textarea name="message"></textarea>
            </fieldset>

            <button type="submit">Submit</button>
          </form>
        </div>

        </div>

       
        
        <div className="mapcontainer">
        <Map/>
        </div>
      </div>

     <Footer/>

     
    
    </Container>
  )
}

export default Contact
