import React from 'react'
import Head from 'next/head'
// import Image from 'next/image'

import Menu from '../components/Menu'
import { Conteiner, Banner } from '../styles/pages/aboutUs'


import bgAboutUs from '../assets/IMAGEM_HOME_002.jpg'
import photoGrid1 from '../assets/IMAGEM_HOME_005.jpg'
import photoGrid2 from '../assets/IMAGEM_HOME_003.jpg'
import photoGrid3 from '../assets/IMAGEM_HOME_001.jpg'
import Footer from '../components/Footer'




const AboutUs: React.FC = () => {


  return (
    <div>
      <Head>
        <title>About Us - Amazonia Therapy</title>
        <meta name="description" content="About us at Amazonia Therapy Cosmetics is a world leader in Professional Cosmetics, focusing on Straightening and Softening products" />
      </Head>

      <Menu />

      <Conteiner>

        <Banner>
          {/* <Image src={bgAboutUs} layout="fill" quality={90}/> */}
          <img src={bgAboutUs} alt="Amazonia About us" />
        </Banner>

        <div className="wrapperContent">
          <div className="content">
            <h1>
              About Us
              </h1>
            <p>
              <strong>Amazonia therapy Cosmetics </strong> is a world leader in Professional Cosmetics, with a focus on Smoothing, Softening and Straightening products, in addition to an excellent collection in Home Care and Hair Treatment products.
              </p>
            <p>
              From straightening Organic Keratins & Proteins to home Care products, we focus on high quality biocompatible hair products, clean & effective formulation based on botanical and safe synthetics ingredients.
              </p>
            <p>
              We focus on the biocompatibility of our products by selecting bioavailable ingredients that does not cause irritation or disrupt the hair or scalp, for immediate or long-term wellbeing of hair & scalp.
              </p>
            <p className="underline">
              Check out Amazonia therapy hair products to maintain healthy balanced hair & scalp.
              </p>

          </div>
        </div>

        <div className="grid">

          <div className="item">
      
              <img src={photoGrid1} alt="Products Amazonia therapy" />
         

          </div>
          <div className="item">
            
            <img src={photoGrid2}  alt="AFRICAN AND AMAZONIAN OILS"  />


          </div>
          <div className="item">
            <img src={photoGrid3}  alt="Amazonia Therapy vitaoils"/>

          </div>
        </div>


      </Conteiner>


      <Footer />



    </div>
  )
}

export default AboutUs
