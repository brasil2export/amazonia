import React from 'react'
import Head from 'next/head'
// import Image from 'next/image'

import Menu from '../components/Menu'

import {Conteiner, Banner} from '../styles/pages/aboutUs'


import bgAboutUs from '../assets/IMAGEM_HOME_002.jpg'
import photoGrid1 from '../assets/photoGrid1.jpg'
import photoGrid2 from '../assets/photoGrid2.jpg'
import photoGrid3 from '../assets/photoGrid3.jpg'
import Footer from '../components/Footer'




const AboutUs: React.FC = () => {


  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>

      <Menu/>

      <Conteiner>

        <Banner>
          {/* <Image src={bgAboutUs} layout="fill" quality={90}/> */}
          <img src={bgAboutUs} alt=""/>
        </Banner>

        <div className="wrapperContent">
          <div className="content">
              <h1>
                About Us
              </h1>
              <p>
              <strong>Amazonia therapy</strong> Cosméticos is a world leader in Professional Cosmetics, with a focus on Smoothing, Softening and Straightening products, in addition to an excellent collection in Home Care and Beauty products.
              </p>
              <p>
                From straightening Organic Keratins Proteins to Skin Care products, we focus on high quality products, personal and personalized service, fast and transparent delivery, and secure and fast payment, to create a lasting partnership relationship with our dear customers.
              </p>
              <p className="underline">
                Check out <strong>Amazonia therapy Vita Oil</strong> hair treatment products.
              </p>
              
          </div>
        </div>

        <div className="grid">

          <div className="item">
            {/* <Image src={photoGrid1} layout="fill"/> */}
            <img src={photoGrid1} />
            
          </div>
          <div className="item">
          {/* <Image src={photoGrid2} layout="fill"/> */}
          <img src={photoGrid2} />


          </div>
          <div className="item">
          <img src={photoGrid3} />

          </div>
        </div>


      </Conteiner>
      
     
      <Footer />

     
    
    </div>
  )
}

export default AboutUs
