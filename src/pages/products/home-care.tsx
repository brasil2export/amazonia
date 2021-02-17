import React, { Component } from "react";
import Slider from "react-slick";
import amazoniaTherapyBotoxAberto from '../../assets/products/amazoniaTherapyBotoxFechado.png'
import amazoniaTherapyConditionerHomeCare from '../../assets/products/amazoniaTherapyConditionerHomeCare.png'
import amazoniaTherapyFillerBoxAndAmpoule from '../../assets/products/amazoniaTherapyFillerBoxAndAmpoule.png'
import amazoniaTherapyProtein1L from '../../assets/products/amazoniaTherapyProtein1L.png'
import amazoniaTherapySerumHomeCare from '../../assets/products/amazoniaTherapySerumHomeCare.png'
import amazoniaTherapyShampooHomeCare from '../../assets/products/amazoniaTherapyShampooHomeCare.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components'

const Container = styled.div`
width: 500px;
padding: 40px;
height: 300px;

.slick-dots li{
    width: 100%;
    height: 100%;
}
`


const HomeCare: React.FC = () => {
    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={amazoniaTherapyBotoxAberto} width={100} height={100}/>
            </a>
            
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
      return (

        <Container>
            <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>


            </Slider>
        </Container>

      
      );
}


export default HomeCare