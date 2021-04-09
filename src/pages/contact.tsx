import React, { useRef } from 'react'
import { useState } from 'react'
import Head from 'next/head'

import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPhone } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go'
import { SiGmail } from 'react-icons/si'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import streetBG from '../assets/streetBG.jpg'
import { Container } from '../styles/pages/contact'



const Contact: React.FC = () => {
  const [colorButton, setColorButton] = useState('#1B1738') 
  const [isDisabled, setIsDisabled ] = useState(false)
  const [verification, setVerification] = useState('');
  const [campos, setCampos] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
    
  }

  const api = async () => {

    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:3030/send'
      : 'https://backend-amazonia.herokuapp.com/send';

    const dados = {
      name: campos.name,
      email: campos.email,
      message: campos.message
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    await fetch(url, options)
      .then(res => res.json())
      .then(res => {
        if (res.accepted) {
 
          setVerification("message sent successfully")
        } else {
          setVerification("error sending message")
          console.log(res)
          setIsDisabled(false)
        }

      })

  }


  function handleFormSubmit(event) {
    event.preventDefault()
    isDisabled === true ?  setIsDisabled(false): setIsDisabled(true)
    colorButton === 'gray' ? setColorButton('#1B1738'): setColorButton('gray')
    api()
    
  }

 



  return (
    <Container >
      <Head>
        <title>Contact - Amazonia Therapy</title>
        <meta name="description" content="Get in touch with the people of Amazonia Therapy by email info@amazoniatherapy.com.br" />
      </Head>
      <Menu />
      <div className="main">
        <img id="bg" src={streetBG} alt="" />
        <div className="contactUSTitle">
          <h1>Contact Us</h1>
        </div>

        <div className="containerContent">
          <div className="containerAdreess">
            <div className="contentAdress">
              <div className="adreess">
                <div className="icon">
                  <GoLocation size={32} />
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
                  <h5>BE A DISTRIBUTOR</h5>
                </div>

                <div className="containterPhoneAndEmail">
                  <div className="phone">

                    <a><FaPhone size={32} /><span>+55 11 3637 7711</span> </a>
                  </div>
                  <div className="email">
                    <a><SiGmail size={32} /><span>info@amazoniatherapy.com.br</span></a>
                  </div>
                </div>

              </div>

              <div className="socialMedia">
                {/* <a href="">
                  <FaInstagram size={32} />
                </a> */}
                <a target="_blank" href="https://www.facebook.com/Amazonia.therapy">
                  <FaFacebook size={32} />
                </a>
                <a target="_blank"  href="https://www.youtube.com/channel/UCAWyuASlgOtRvPjBvMz3cbg">
                  <FaYoutube size={32} />
                </a>
              </div>
            </div>




          </div>

          <div className="form">
            <form action="" method="post" onSubmit={handleFormSubmit}>
              <legend>Send A Message</legend>
              <fieldset>

                <input required type="text" name="name" onChange={handleInputChange} />
                <label className="labelForm" htmlFor="name">Name</label>
              </fieldset>
              <fieldset>
                <input required type="text" name="email" onChange={handleInputChange} />
                <label className="labelForm" htmlFor="email" >Email</label>
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message</label>
                <textarea required name="message" onChange={handleInputChange}></textarea>
              </fieldset>

              <button disabled={isDisabled} style={{backgroundColor: colorButton }} type="submit">Submit</button>
              <span>{verification}</span>
            </form>
          </div>

        </div>



      </div>

      <Footer />



    </Container>
  )
}

export default Contact
