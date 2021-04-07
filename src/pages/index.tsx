import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import Carousell from '../components/Carousel'
import Footer from '../components/Footer'

import ProductItem from '../components/ProductItem'

import AmazoniaVitaoils from '../assets/amazoniaVitaoils.png'
import AmazoniaHomeCare from '../assets/amazoniaHomeCare.png'
import AmazoniaBotoxClose from '../assets/amazoniaBotoxClose.png'
import productBG from '../assets/IMAGEM_HOME_001.jpg'
import salaoBG from '../assets/IMAGEM_HOME_004.jpg'

import shampooBG from '../assets/IMAGEM_HOME_003.jpg'
import AmazoniaProductsHomePage from '../assets/IMAGEM_HOME_005.jpg'


//products Img
import amazoniaTherapyBotoxAberto from '../assets/products/amazoniaTherapyBotoxFechado.png'
import amazoniaTherapyConditionerHomeCare from '../assets/products/amazoniaTherapyConditionerHomeCare.png'
import amazoniaTherapyFillerBoxAndAmpoule from '../assets/products/amazoniaTherapyFillerBoxAndAmpoule.png'
import amazoniaTherapyProtein1L from '../assets/products/amazoniaTherapyProtein1L.png'
import amazoniaTherapySerumHomeCare from '../assets/products/amazoniaTherapySerumHomeCare.png'
import amazoniaTherapyShampooHomeCare from '../assets/products/amazoniaTherapyShampooHomeCare.png'






import products from '../../AmazoniaContentDB.json'

import { Banner, Container, WrapperContent } from '../styles/pages/Home'
import CarouselFill from 'react-bootstrap/Carousel'

const Home: React.FC = () => {


  let countImagensProducts = 0;
  const imagens = [AmazoniaVitaoils, AmazoniaHomeCare, AmazoniaBotoxClose]
  const txt = ["with coffee extract & hazelnut oil", "Shampoo Perfect Smooth", "Amazonia Therapy Botox 500G"]
  const title = ["Amazonia Vitaoils ", "Amazonia Home Care", "Amazonia Botox"]


  const productImages = [
    amazoniaTherapyBotoxAberto,
    amazoniaTherapyProtein1L,
    amazoniaTherapyShampooHomeCare,
    amazoniaTherapyConditionerHomeCare,
    amazoniaTherapySerumHomeCare,
    amazoniaTherapyFillerBoxAndAmpoule
  ]


  return (
    <Container>
      <Head>
        <title>Amazonia Therapy</title>
      </Head>


      <Menu />

      <WrapperContent>

        <Banner>
          <CarouselFill interval={50000} >

            <CarouselFill.Item>
              <img className="d-block w-100" src={AmazoniaProductsHomePage} alt="Amazonia Therrapy shampoo and Conditioner" />

              <CarouselFill.Caption>
                <h1>Amazonia Therapy</h1>
                <p> Biocompatible Haircare</p>
              </CarouselFill.Caption>
            </CarouselFill.Item>

            <CarouselFill.Item>
              <img className="d-block w-100" src={productBG} alt="Amazonia Therrapy shampoo and Conditioner" />

              <CarouselFill.Caption>
                <h1>Vitaoils</h1>
                <p>Perfect smoothing for all hair types</p>
              </CarouselFill.Caption>
            </CarouselFill.Item>
            <CarouselFill.Item>
              <img className="d-block w-100" src={salaoBG} alt="Amazonia Professional Products" />


              <CarouselFill.Caption>
                <h1>Professional Products</h1>
                <p>If you are looking to make the switch to natural shampoo and conditioner</p>
              </CarouselFill.Caption>
            </CarouselFill.Item>

            <CarouselFill.Item>
              <img className="d-block w-100" src={shampooBG} alt="African and Amazonian Oils" />
              <CarouselFill.Caption>
                <h1>African & Amazonian Oils</h1>
                <p>Brazilian Smoothing protein treatment. vita oils, zero formaldehyde, order now.</p>
              </CarouselFill.Caption>
            </CarouselFill.Item>


          </CarouselFill>
        </Banner>

        <section className="section2">

          <div className="wrapperImage">
            <Carousell indicators={false} interval={100000} image={imagens} text={txt} title={title} />
          </div>

          <div className="wrapperTitle">
            <div className="tex">
              <h3>Avocado Oil</h3>
              <h2>Coffee Extract </h2>
              <h3>Amino Acids</h3>
            </div>
          </div>

        </section>

        <section className="section3" >

          <h3>Products</h3>
          <div className="grid">

            {products.products_Information_Home.map(product => {
              return (
                <ProductItem
                  link={product.link}
                  key={`${product.title}_ID`}
                  title={product.title}
                  contentText={product.text}
                  image={productImages[countImagensProducts++]}
                  alt={product.alt}
                />
              )
            })}
          </div>
        </section>


      </WrapperContent>
      <Footer />

    </Container>
  )
}

export default Home
