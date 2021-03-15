import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPhone} from 'react-icons/fa';
import {GoLocation} from 'react-icons/go'
import {SiGmail} from 'react-icons/si'

import Menu from '../components/Menu'
import Footer  from '../components/Footer'

import streetBG from '../assets/streetBG.jpg'
import { Container } from '../styles/pages/contact'


const Contact: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Contact</title>
      </Head>
      <Menu/>
      <div className="main">
        <img id="bg" src={streetBG} alt=""/>
        <div className="contactUSTitle">
          <h1>Contact Us</h1>        
        </div>

        <div className="containerContent">
        <div className="containerAdreess">      
          <div className="contentAdress">
            <div className="adreess">
                <div className="icon">
                  <GoLocation size={32}/>
                </div>
                <div className="text">
                  <h5>
                    Adreess
                  </h5>
                  <p>Rua João Paulo Ablas, 1400
                  Galpão Número 4
                  Bairro Jardim da Glória
                  Cotia, SP, Brasil
                  CEP: 06711-250</p>
                </div>
              </div>

            <div className="contact">
              <div className="title">
              <h5>SEJA UM DISTRIBUIDOR</h5>
              </div>
                
               <div className="containterPhoneAndEmail">
                <div className="phone">
          
                    <a href="tel:+551136377711"><FaPhone size={32}/><span>+55 11 3637 7711</span> </a>
                  </div>
                  <div className="email">
                    <a href="mailto:info@amazoniatherapy.com.br"><SiGmail size={32}/><span>info@amazoniatherapy.com.br</span></a>
                  </div>
               </div>
               
              </div>

            <div className="socialMedia">
              <a href="">
                <FaInstagram size={32}/>
              </a>
              <a href="">
              <FaFacebook size={32}/>
              </a>
              <a href="">
              <FaTwitter size={32}/>
              </a>
              <a href="">
              <FaYoutube size={32}/>
              </a>
          </div>
          </div>


          

        </div>
        
        <div className="form">
          <form action="" method="post">
            <legend>Send A Message</legend>
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
        
  
       
      </div>

     <Footer/>

     
    
    </Container>
  )
}

export default Contact
